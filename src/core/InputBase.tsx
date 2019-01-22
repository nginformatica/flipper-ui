import { InputBase as MuiInputBase } from '@material-ui/core'
import React, { ChangeEvent, ReactNode, SFC } from 'react'
import { IDefault } from './Advertise'

export interface IProps extends IDefault {
    children: ReactNode
    autoComplete?: string
    autoFocus?: boolean
    classes?: object
    defaultValue?: string | number
    disabled?: boolean
    endAdornment?: ReactNode
    error?: boolean
    fullWidth?: boolean
    id?: string
    inputComponent?: string
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

const InputAdornment: SFC<IProps> = ({ children, margin, padding, style = {}, ...otherProps }) =>
    <MuiInputBase
        { ...otherProps }
        style={ { padding, margin, ...style } }>
        { children }
    </MuiInputBase>

export default InputAdornment
