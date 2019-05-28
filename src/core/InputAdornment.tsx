import { InputAdornment as MuiInputAdornment } from '@material-ui/core'
import React, { FC } from 'react'
import { IDefault } from './Advertise'

export interface IProps extends IDefault {
    position: 'start' | 'end'
}

const InputAdornment: FC<IProps> = ({ children, ...otherProps }) =>
    <MuiInputAdornment { ...otherProps }>
        { children }
    </MuiInputAdornment>

export default InputAdornment
