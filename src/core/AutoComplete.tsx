import React, {
    cloneElement,
    FocusEvent,
    Fragment,
    ReactNode,
    FC,
    useState,
    useRef,
    ChangeEvent,
    KeyboardEvent
} from 'react'
import Paper from './Paper'

interface IProps {
    data: TSelected[]
    value: TSelected
    defaultValue?: string
    inputElement: React.ReactElement
    InputProps?: object
    defaultIsOpen?: boolean
    openOnFocus?: boolean
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
    const [value, setValue] = useState<string>(initialValue)
    const [highlighted, setHighlighted] = useState(0)
    const [open, setOpen] = useState(!!props.defaultIsOpen)

    const handleSelect = (item: TSelected) => {
        if (typeof item === 'object' && item.subheader) {
            return
        }

        setValue(typeof item === 'object' ? item.label : item || '')
        setOpen(false)

        if (props.onChange) {
            props.onChange(item)
        }
    }

    const getSuggestions = (): TSelected[] => {
        if (props.openOnFocus && !value) {
            return props.data
        }

        const items = value
            ? props.data
            : []

        return items
            .filter(item => {
                if (typeof item === 'object') {
                    if (item.subheader) {
                        return true
                    }

                    return item.label.toLowerCase().includes(value.toLowerCase())
                }

                return item.toLowerCase().includes(value.toLowerCase())
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

    const getItemProps = (item: TSelected) => {
        return {
            onClick: (event: Event) => {
                event.preventDefault()
                event.stopPropagation()
                handleSelect(item)
            }
        }
    }

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
        setValue(event.target.value)
        setHighlighted(0)

        if (props.onChange) {
            props.onChange(value)
        }

        if (getSuggestions().length > 0) {
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
            value,
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
        <div style={ { position: 'relative' } }>
            { renderInput() }
            { open && renderSuggestions() }
        </div>
    )
}

export default AutoComplete
