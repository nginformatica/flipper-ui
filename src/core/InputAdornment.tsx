import { InputAdornment as MuiInputAdornment } from '@material-ui/core'
import React, { SFC } from 'react'
import { IDefault } from './Advertise'

export interface IProps extends IDefault {
    position: 'start' | 'end'
    children: React.ReactNode
}

const InputAdornment: SFC<IProps> = ({ children, ...otherProps }) =>
    <MuiInputAdornment { ...otherProps }>
        { children }
    </MuiInputAdornment>

export default InputAdornment
