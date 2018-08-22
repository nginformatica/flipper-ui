import React from 'react'
import _ from 'prop-types'
import styled from 'styled-components'
import { primary, background } from '../colors'

const Label = styled.label`
    padding: 12px;
    transition: all 500ms ease;
    cursor: pointer;
    margin: 0.75em;
    border-radius: 6px;
    &:hover {
        color: ${primary.normal}
        background: ${background.light}
    }
`

const Input = styled.input`
    margin-right: ${props => props.label !== '' ? '12px' : '0px' }
`

const Checkbox = ({ label, style, onChange }) =>
    <Label style={ style }>
        <Input
            type="checkbox"
            onChange={ onChange }
        />
        { label }
    </Label>

Checkbox.propTypes = {
    label: _.string,
    style: _.object,
    onChange: _.func
}

export default Checkbox
