import { Checkbox as MuiCheckbox, FormControlLabel } from '@material-ui/core'
import React from 'react'

interface IProps {
    label?: string
    style?: object
    name: string
    checked?: boolean
    onChange?: (event) => void
}

const Checkbox = ({ label, style, onChange, name, checked }: IProps) =>
    label
        ? (
            <FormControlLabel
                style={ style }
                control={
                    <MuiCheckbox
                        checked={ checked }
                        value={ name }
                        onChange={ onChange }
                    />
                }
                label={ label }
            />
        )
        : (
            <MuiCheckbox
                checked={ checked }
                value={ name }
                onChange={ onChange }
            />
        )

export default Checkbox
