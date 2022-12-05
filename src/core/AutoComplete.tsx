import React, {
    Fragment,
    ReactNode,
    FC,
    useState,
    useRef,
    ChangeEvent,
    KeyboardEvent,
    CSSProperties,
    Ref,
    FocusEvent,
    useEffect
} from 'react'
import Paper from './Paper'
import Fade from './Fade'

interface AutoCompleteProps {
    autoFocus?: boolean
    defaultIsOpen?: boolean
    openOnFocus?: boolean
    selectTextOnFocus?: boolean
    caseSensitive?: boolean
    fade?: boolean
    focusDelay?: number
    suggestions: ISelected[]
    value?: TSelected
    defaultValue?: string
    style?: CSSProperties
    maxHeight?: number
    actions?: ReactNode | JSX.Element
    renderSuggestion: (
        suggestion: string | object,
        itemProps: object,
        selected: boolean
    ) => ReactNode
    onChange: (value: TSelected) => void
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void
    renderInput(props: IInputProps): React.ReactElement
}

interface IInputProps {
    value: string
    inputProps: {
        ref: Ref<HTMLInputElement>
    }
    onChange(event: ChangeEvent<HTMLInputElement>): void
    onFocus(event: FocusEvent<HTMLInputElement>): void
    onBlur(event: FocusEvent<HTMLInputElement>): void
    onKeyDown(event: KeyboardEvent): void
}

interface ISelected {
    label: string
    value?: string
    type?: string
    subheader?: boolean
}

type TSelected = ISelected | string

const removeAccents = (text: string) =>
    text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

const AutoComplete: FC<AutoCompleteProps> = props => {
    const inputRef = useRef<HTMLInputElement>(null)

    const index = props.suggestions.findIndex(suggestion => {
        if (props.value && typeof props.value === 'object') {
            return props.value.value === suggestion.value
        }

        return false
    })

    const [highlighted, setHighlighted] = useState(Math.max(0, index))
    const [open, setOpen] = useState(Boolean(props.defaultIsOpen))

    useEffect(() => {
        if (props.autoFocus) {
            if (inputRef.current) {
                inputRef.current.focus()

                if (props.openOnFocus) {
                    setOpen(true)
                }
            }
        } else if (props.focusDelay) {
            setTimeout(() => {
                if (inputRef.current) {
                    inputRef.current.focus()
                }

                if (props.openOnFocus) {
                    setOpen(true)
                }
            }, props.focusDelay)
        }
    }, [])

    const inputValue =
        typeof props.value === 'object' ? props.value.label : props.value || ''

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

        const items = value ? props.suggestions : []

        return items.filter(item => {
            if (!item.subheader) {
                return props.caseSensitive
                    ? removeAccents(item.label).includes(removeAccents(value))
                    : removeAccents(item.label)
                          .toLocaleLowerCase()
                          .includes(removeAccents(value).toLocaleLowerCase())
            }

            return true
        })
    }

    useEffect(() => {
        const isFocused =
            inputRef && inputRef.current
                ? document.activeElement === inputRef.current
                : false

        const isSearching = props.value && typeof props.value === 'string'

        const hasSuggestions = getSuggestions().length > 0

        if (isSearching && hasSuggestions && isFocused) {
            setOpen(true)
        }
    }, [getSuggestions(), props.value])

    const getPaperPosition = () => {
        if (inputRef.current !== null) {
            const height = props.maxHeight || getSuggestions().length * 48
            const { top } = inputRef.current.getBoundingClientRect()

            if (top + height > window.innerHeight) {
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

        if (props.selectTextOnFocus && event.target) {
            const input = event.target

            if (input.select) {
                input.select()
            }
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
        setHighlighted(0)

        props.onChange(event.target.value)
    }

    const renderSuggestions = () => {
        const paperStyle: CSSProperties = {
            position: 'absolute',
            width: inputRef.current ? inputRef.current.offsetWidth : 256,
            bottom:
                getPaperPosition() === 'above' && inputRef.current
                    ? inputRef.current.getBoundingClientRect().height + 1
                    : undefined,
            zIndex: 1099
        }

        return (
            <Paper square style={paperStyle}>
                <div style={{ overflow: 'auto', maxHeight: props.maxHeight }}>
                    {getSuggestions().map((suggestion, index) => (
                        <Fragment key={index}>
                            {props.renderSuggestion(
                                suggestion,
                                getItemProps(suggestion),
                                highlighted === index
                            )}
                        </Fragment>
                    ))}
                </div>
                {props.actions}
            </Paper>
        )
    }

    const renderPaper = () =>
        props.fade ? (
            <Fade in={open}>{renderSuggestions()}</Fade>
        ) : (
            renderSuggestions()
        )

    const handleNavigate = (event: KeyboardEvent) => {
        if (
            event.key === 'ArrowDown' &&
            highlighted < getSuggestions().length - 1
        ) {
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
            style={{
                position: 'relative',
                ...props.style
            }}>
            {props.renderInput({
                value: inputValue,
                inputProps: {
                    ref: inputRef
                },
                onChange: handleChange,
                onFocus: handleFocus,
                onBlur: handleBlur,
                onKeyDown: handleNavigate
            })}
            {open && renderPaper()}
        </div>
    )
}

export default AutoComplete
