import { TextField as MuiTextField } from '@material-ui/core'
import React, { ChangeEvent } from 'react'
import { IDefault } from './Advertise'

export interface IProps extends IDefault {
    noBorder?: boolean
    autoComplete?: string
    autoFocus?: boolean
    defaultValue?: string | number
    disabled?: boolean
    error?: boolean
    fullWidth?: boolean
    id?: string
    label?: string
    placeholder?: string
    multiline?: boolean
    name?: string
    required?: boolean
    select?: boolean
    type?: string
    value?: string | number | boolean | string[]
    variant?: 'standard' | 'outlined' | 'filled'
    inputProps?: object
    InputProps?: object
    InputLabelProps?: object
    SelectProps?: object
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const TextField: React.SFC<IProps> = ({
    margin,
    padding,
    style = {},
    error,
    variant = 'outlined',
    ...otherProps
}) =>
    <MuiTextField
        error={ error }
        variant={ variant }
        style={ { margin, padding, ...style } }
        { ...otherProps }
    />

export default TextField
