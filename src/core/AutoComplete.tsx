import { contains, toLower } from 'ramda'
import React, {
    cloneElement,
    FocusEvent,
    Fragment,
    ReactNode,
    FC,
    useState,
    useRef,
    ChangeEvent,
    KeyboardEvent,
    CSSProperties
} from 'react'
import Paper from './Paper'

interface IProps {
    suggestions: TSelected[]
    value: TSelected
    defaultValue?: string
    inputElement: React.ReactElement
    InputProps?: object
    defaultIsOpen?: boolean
    openOnFocus?: boolean
    style?: CSSProperties
    caseSensitive?: boolean
    renderSuggestion: (
        suggestion: string | object,
        itemProps: object,
        selected: boolean
    ) => ReactNode
    onChange?: (value: TSelected) => void
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void
}

interface ISelected {
    label: string
    value: string
    type?: string
    subheader?: string
}

type TSelected = ISelected | string

const AutoComplete: FC<IProps> = props => {
    const initialValue = typeof props.value === 'object'
        ? props.value.label
        : props.value || ''

    const inputRef = useRef<HTMLInputElement>(null)
    const [inputValue, setInputValue] = useState<string>(initialValue)
    const [highlighted, setHighlighted] = useState(0)
    const [open, setOpen] = useState(Boolean(props.defaultIsOpen))

    const handleSelect = (item: TSelected) => {
        if (typeof item === 'object' && item.subheader) {
            return
        }

        setInputValue(typeof item === 'object' ? item.label : item || '')
        setOpen(false)

        if (props.onChange) {
            props.onChange(item)
        }
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
                    if (item.subheader) {
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

    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
        if (props.openOnFocus) {
            setOpen(true)
        }

        if (props.onFocus) {
            props.onFocus(event)
        }
    }

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
        setTimeout(() => setOpen(false), 200)

        if (props.onBlur) {
            props.onBlur(event)
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
        setHighlighted(0)

        if (props.onChange) {
            props.onChange(inputValue)
        }

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
            bottom: getPaperPosition() === 'above'
                    && inputRef.current
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
        } else if (event.key === 'Enter') {
            const item = getSuggestions()[highlighted]
            handleSelect(item)
        }
    }

    const renderInput = () =>
        cloneElement(props.inputElement, {
            value: inputValue,
            onChange: handleChange,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onKeyDown: handleNavigate,
            InputProps: {
                ...props.InputProps
            },
            inputProps: {
                ref: inputRef
            }
        })

    return (
        <div
            style={ {
                position: 'relative',
                ...props.style
            } }>
            { renderInput() }
            { open && renderSuggestions() }
        </div>
    )
}

export default AutoComplete
