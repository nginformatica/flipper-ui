import { contains, toLower } from 'ramda'
import React, {
    Fragment,
    ReactNode,
    FC,
    useState,
    useRef,
    ChangeEvent,
    KeyboardEvent,
    CSSProperties,
    Ref
} from 'react'
import Paper from './Paper'

interface IProps {
    suggestions: TSelected[]
    value: TSelected
    defaultValue?: string
    defaultIsOpen?: boolean
    openOnFocus?: boolean
    style?: CSSProperties
    caseSensitive?: boolean
    renderSuggestion: (
        suggestion: string | object,
        itemProps: object,
        selected: boolean
    ) => ReactNode
    onChange: (value: TSelected) => void
    onFocus?: (event: FocusEvent) => void
    onBlur?: (event: FocusEvent) => void
    renderInput(props: IInputProps): React.ReactElement
}

interface IInputProps {
    value: string
    inputProps: {
        ref: Ref<HTMLInputElement>
    }
    onChange(event: ChangeEvent<HTMLInputElement>): void
    onFocus(event: FocusEvent): void
    onBlur(event: FocusEvent): void
    onKeyDown(event: KeyboardEvent): void
}

interface ISelected {
    label: string
    value?: string
    type?: string
    subheader?: boolean
    action?: boolean
}

type TSelected = ISelected | string

const AutoComplete: FC<IProps> = props => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [highlighted, setHighlighted] = useState(0)
    const [open, setOpen] = useState(Boolean(props.defaultIsOpen))

    const inputValue = typeof props.value === 'object'
        ? props.value.label
        : props.value || ''

    const handleSelect = (item: TSelected) => {
        if (typeof item === 'object' && item.subheader) {
            return
        }

        setOpen(false)
        props.onChange(item)
    }

    const getSuggestions = (value: string = inputValue): TSelected[] => {
        if (props.openOnFocus && !value) {
            return props.suggestions
        }

        const items = value
            ? props.suggestions
            : []

        return items
            .filter(item => {
                if (typeof item === 'object') {
                    if (item.subheader || item.action) {
                        return true
                    }

                    return props.caseSensitive
                        ? contains(value, item.label)
                        : contains(toLower(value), toLower(item.label))
                }

                return props.caseSensitive
                    ? contains(value, item)
                    : contains(toLower(value), toLower(item))
            })
    }

    const getPaperPosition = () => {
        if (inputRef.current !== null) {
            const height = getSuggestions().length * 48
            const { top } = inputRef.current.getBoundingClientRect()

            if ((top + height) > window.innerHeight) {
                return 'above'
            }
        }

        return 'below'
    }

    const getItemProps = (item: TSelected) => ({
        onClick: (event: Event) => {
            event.preventDefault()
            event.stopPropagation()
            handleSelect(item)
        }
    })

    const handleFocus = (event: FocusEvent) => {
        if (props.openOnFocus) {
            setOpen(true)
        }

        if (props.onFocus) {
            props.onFocus(event)
        }
    }

    const handleBlur = (event: FocusEvent) => {
        setTimeout(() => setOpen(false), 200)

        if (props.onBlur) {
            props.onBlur(event)
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setHighlighted(0)

        props.onChange(event.target.value)

        if (getSuggestions(event.target.value).length > 0) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

    const renderSuggestions = () => {
        const paperStyle = {
            position: 'absolute' as 'absolute',
            width: inputRef.current ? inputRef.current.offsetWidth : 256,
            bottom: getPaperPosition() === 'above' && inputRef.current
                ? inputRef.current.getBoundingClientRect().height + 1
                : undefined,
            zIndex: 1099
        }

        return (
            <Paper square style={ paperStyle }>
                {
                    getSuggestions().map((suggestion, index) =>
                        <Fragment key={ index }>
                            {
                                props.renderSuggestion(
                                    suggestion,
                                    getItemProps(suggestion),
                                    highlighted === index
                                )
                            }
                        </Fragment>
                    )
                }
            </Paper>
        )
    }

    const handleNavigate = (event: KeyboardEvent) => {
        if (event.key === 'ArrowDown' && highlighted < getSuggestions().length - 1) {
            setHighlighted(highlighted + 1)
        } else if (event.key === 'ArrowUp' && highlighted > 0) {
            setHighlighted(highlighted - 1)
        } else if (event.key === 'Escape') {
            setOpen(false)
        } else if (event.key === 'Enter') {
            const item = getSuggestions()[highlighted]
            handleSelect(item)
        }
    }

    return (
        <div
            style={ {
                position: 'relative',
                ...props.style
            } }>
            {
                props.renderInput({
                    value: inputValue,
                    inputProps: {
                        ref: inputRef
                    },
                    onChange: handleChange,
                    onFocus: handleFocus,
                    onBlur: handleBlur,
                    onKeyDown: handleNavigate
                })
            }
            { open && renderSuggestions() }
        </div>
    )
}

export default AutoComplete
