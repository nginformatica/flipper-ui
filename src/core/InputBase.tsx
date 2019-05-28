import { InputBase as MuiInputBase } from '@material-ui/core'
import React, { ChangeEvent, ReactNode, FC } from 'react'
import { IDefault } from './Advertise'

export interface IProps extends IDefault {
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

const InputAdornment: FC<IProps> = ({
    margin,
    padding,
    style = {},
    autoComplete = 'off',
    ...otherProps
}) =>
    <MuiInputBase
        autoComplete={ autoComplete }
        { ...otherProps }
        style={ { padding, margin, ...style } }
    />

export default InputAdornment
