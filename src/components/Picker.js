import React, { Component } from 'react'
import _ from 'prop-types'
import styled from 'styled-components'
import { background, primary, text, white } from '../colors'

const Select = styled.select`
    outline: none;
    padding: 0.5em;
    border-radius: 6px;
    line-height: 1.5em;
    margin: 1em;
    border: 1px solid ${background.dark};
    color: ${text};
    font-size: 14px;
    background: ${white};
    font-family: 'Roboto', sans-serif;
    transition: all 500ms ease;
    height: 38px;
    &:focus {
        border: 1px solid ${primary.normal};
        border-radius: 6px;
    }
`

const Option = styled.option`
    font-size: 14px;
`

class Picker extends Component {
    render() {
        return (
            <Select
                placeholder={ this.props.placeholder }
                value={ this.props.value }
                style={ this.props.style }
                disabled={ this.props.disabled }
                onChange={ this.props.onChange }>
                {
                    this.props.options.map((option, index) =>
                        <Option
                            key={ index }
                            value={ option.label }>
                            { option.label }
                        </Option>
                    )
                }
            </Select>
        )
    }
}

Picker.propTypes = {
    placeholder: _.string,
    options: _.array.isRequired,
    value: _.string,
    style: _.object,
    disabled: _.bool,
    onChange: _.func
}

export default Picker
