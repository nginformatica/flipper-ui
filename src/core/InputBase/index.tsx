import { InputBase as MuiInputBase } from '@material-ui/core'
import React, { ChangeEvent, ReactNode } from 'react'
import { DefaultProps } from '../types'

export interface InputAdornmentProps extends DefaultProps {
    autoComplete?: string
    autoFocus?: boolean
    classes?: object
    defaultValue?: string | number
    disabled?: boolean
    endAdornment?: ReactNode
    error?: boolean
    fullWidth?: boolean
    id?: string
    inputProps?: object
    multiline?: boolean
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    readonly?: boolean
    required?: boolean
    rows?: string | number
    rowsMax?: string | number
    startAdornment?: ReactNode
    type?: string
    value?: string | number | boolean
}

const InputAdornment = ({
    margin,
    padding,
    style = {},
    autoComplete = 'off',
    ...otherProps
}: InputAdornmentProps) => (
    <MuiInputBase
        autoComplete={autoComplete}
        {...otherProps}
        style={{ padding, margin, ...style }}
    />
)

export default InputAdornment
