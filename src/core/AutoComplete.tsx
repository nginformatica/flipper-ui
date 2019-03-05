import Downshift from 'downshift'
import {
    contains,
    filter,
    is,
    isNil,
    pipe,
    propEq,
    propOr,
    toLower,
    uniq,
    unless,
    when
} from 'ramda'
import React, {
    cloneElement,
    Component,
    FocusEvent,
    Fragment,
    ReactElement,
    ReactNode
} from 'react'
import Paper from './Paper'

interface IProps {
    data: object[] | string[]
    value: string
    defaultValue?: string
    inputElement: ReactElement<any>
    InputProps?: object
    defaultIsOpen?: boolean
    openOnFocus?: boolean
    selected?: ISelected | ISelected[]
    renderSuggestion: (
        suggestion: string | object,
        itemProps: object,
        selected: boolean
    ) => ReactNode
    onChange?: (value: string | ISelected) => void
    onSelect?: (value: ISelected) => void
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void
}

interface ISelected {
    label: string
    value: string
    type?: string
}

class AutoComplete extends Component<IProps> {
    public autocomplete = { offsetWidth: 256 }
    public getSuggestions(inputValue: string | null) {
        if (this.props.openOnFocus && !inputValue) {
            return this.props.data
        }

        const items = inputValue
            ? this.props.data
            : []

        return uniq(
            filter(
                unless(
                    propEq('subheader', true),
                    pipe(
                        when(is(Object), propOr('', 'label')),
                        toLower,
                        contains(toLower(inputValue || ''))
                    )
                ),
                items
            )
        )
    }

    public handleSelect(value: ISelected) {
        if (this.props.onSelect) {
            this.props.onSelect(value)
        } else {
            this.handleChange(value)
        }
    }

    public handleChange(value: string | ISelected) {
        if (!isNil(value) && this.props.onChange) {
            this.props.onChange(value)
        }
    }

    public renderInput(props: {
        inputProps: object,
        onFocus: (event: FocusEvent<HTMLInputElement>) => void
    }) {
        return cloneElement(this.props.inputElement, {
            InputProps: {
                ...props,
                ...this.props.InputProps
            },
            inputProps: {
                ref: self => {
                    this.autocomplete = self
                }
            }
        })
    }

    public render() {
        const paperStyle = {
            position: 'absolute',
            width: this.autocomplete.offsetWidth,
            zIndex: 1099
        }

        return (
            <Downshift
                inputValue={ this.props.value }
                defaultInputValue={ this.props.defaultValue }
                selectedItem={ this.props.selected }
                defaultIsOpen={ this.props.defaultIsOpen }
                itemToString={ item => is(Object, item) ? item.label : item }
                onSelect={ this.handleSelect.bind(this) }
                onInputValueChange={ this.props.onChange }>
                {
                    ({ isOpen, getInputProps, inputValue, getItemProps, highlightedIndex, openMenu }) =>
                        <div>
                            {
                                this.renderInput(getInputProps({
                                    onBlur: this.props.onBlur,
                                    onFocus: (event: FocusEvent<HTMLInputElement>) => this.props.onFocus
                                        ? this.props.onFocus(event)
                                        : this.props.openOnFocus
                                            ? openMenu()
                                            : null,
                                    value: inputValue || ''
                                }))
                            }
                            {
                                isOpen && (
                                    <Paper square style={ paperStyle }>
                                        {
                                            this.getSuggestions(inputValue).map((suggestion, index) =>
                                                <Fragment key={ index }>
                                                    {
                                                        this.props.renderSuggestion(
                                                            suggestion,
                                                            getItemProps({ item: suggestion }),
                                                            highlightedIndex === index
                                                        )
                                                    }
                                                </Fragment>
                                            )
                                        }
                                    </Paper>
                                )
                            }
                        </div>
                }
            </Downshift>
        )
    }
}

export default AutoComplete
