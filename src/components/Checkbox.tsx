import React from 'react'
import _ from 'prop-types'
import styled from 'styled-components'
import { primary, background } from '../colors'

interface IProps {
    label?: string
    style?: object
    onChange?: () => void
}

interface IInput {
    label?: string
    type: string
    onChange?: () => void
}

const Label = styled.label`
    padding: 12px;
    transition: all 500ms ease;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    margin: 0.75em;
    border-radius: 6px;
    &:hover {
        color: ${primary.normal};
        background: ${background.light}
    }
`

const Input = styled.input<IInput>`
    margin-right: ${props => props.label ? '0px' : '12px' };
`

const Checkbox = ({ label, style, onChange }: IProps) =>
    <Label style={ style }>
        <Input
            label={ label }
            type="checkbox"
            onChange={ onChange }
        />
        { label }
    </Label>

export default Checkbox
