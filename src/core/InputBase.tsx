import { InputBase as MuiInputBase } from '@material-ui/core'
import React, { SFC } from 'react'
import { IDefault } from './Advertise'

export interface IProps extends IDefault {
    children: React.ReactNode
}

const InputAdornment: SFC<IProps> = ({ children, margin, padding, style = {}, ...otherProps }) =>
    <MuiInputBase
        { ...otherProps }
        style={ { padding, margin, ...style } }>
        { children }
    </MuiInputBase>

export default InputAdornment
