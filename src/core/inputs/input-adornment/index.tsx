import React from 'react'
import { InputAdornment as MuiInputAdornment } from '@material-ui/core'
import type { DefaultProps } from '../../types'
import type { InputAdornmentProps as MuiInputProps } from '@material-ui/core'

export interface InputAdornmentProps extends DefaultProps, MuiInputProps {
    position: 'start' | 'end'
}

const InputAdornment = ({ children, ...otherProps }: InputAdornmentProps) => (
    <MuiInputAdornment {...otherProps}>{children}</MuiInputAdornment>
)

export default InputAdornment
