import { InputAdornment as MuiInputAdornment } from '@material-ui/core'
import React from 'react'
import { DefaultProps } from '../types'

export interface InputAdornmentProps extends DefaultProps {
    position: 'start' | 'end'
}

const InputAdornment = ({ children, ...otherProps }: InputAdornmentProps) => (
    <MuiInputAdornment {...otherProps}>{children}</MuiInputAdornment>
)

export default InputAdornment
