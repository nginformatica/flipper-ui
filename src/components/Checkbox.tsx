import { Checkbox as MuiCheckbox, FormControlLabel } from '@material-ui/core'
import React from 'react'

interface IProps {
    label?: string
    style?: object
    value: string
    checked?: boolean
    onChange?: (event) => void
}

const Checkbox = ({ label, style, onChange, value, checked }: IProps) =>
    <FormControlLabel
        style={ style }
        control={
            <Checkbox
                checked={ checked }
                value={ value }
                onChange={ onChange }
            />
        }
        label={ label }
    />

export default Checkbox
