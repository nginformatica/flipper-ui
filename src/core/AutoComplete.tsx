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
import React, { Component } from 'react'
import Paper from './Paper'

interface IProps {
    data: object[] | string[]
    value: string
    inputElement: React.ReactElement<any>
    renderSuggestion: (suggestion: string | object, itemProps: object) => React.ReactNode
    onChange?: (value: string) => void
    onSelect?: (value: string) => void
}

class AutoComplete extends Component<IProps> {
    public autocomplete = { offsetWidth: 256 }
    public getSuggestions(inputValue) {
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
                        contains(toLower(inputValue))
                    )
                ),
                items
            )
        )
    }

    public handleSelect(value) {
        if (this.props.onSelect) {
            this.props.onSelect(value)
        } else {
            this.handleChange(value)
        }
    }

    public handleChange(value) {
        if (!isNil(value)) {
            this.props.onChange!(value)
        }
    }

    public renderInput(props: { inputProps: object }) {
        return React.cloneElement(this.props.inputElement, {
            InputProps: { ...props },
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
                defaultIsOpen={ false }
                itemToString={ item => is(Object, item) ? item.label : item }
                onSelect={ this.handleSelect.bind(this) }
                onInputValueChange={ this.handleChange.bind(this) }>
                {
                    ({ isOpen, getInputProps, inputValue, getItemProps }) =>
                        <div>
                            { this.renderInput(getInputProps()) }
                            {
                                isOpen && (
                                    <Paper square style={ paperStyle }>
                                        {
                                            this.getSuggestions(inputValue).map(suggestion =>
                                                this.props.renderSuggestion(
                                                    suggestion,
                                                    getItemProps({ item: suggestion })
                                                )
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
