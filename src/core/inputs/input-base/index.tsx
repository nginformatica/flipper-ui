import type { ChangeEvent, ReactNode } from 'react'
import React from 'react'
import { InputBase as MuiInputBase } from '@material-ui/core'
import type { DefaultProps } from '../../types'
import type { InputBaseProps as MuiInputBaseProps } from '@material-ui/core'

export interface InputAdornmentProps
    extends DefaultProps,
        Omit<MuiInputBaseProps, 'margin'> {
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

const InputBase = ({
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

export default InputBase
