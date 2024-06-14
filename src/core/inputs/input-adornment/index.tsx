import React from 'react'
import MuiInputAdornment from '@mui/material/InputAdornment'
import type { DefaultProps } from '@/core/types'
import type { InputAdornmentProps } from '@mui/material/InputAdornment'

export interface IInputAdornmentProps
    extends DefaultProps,
        InputAdornmentProps {
    position: 'start' | 'end'
}

const InputAdornment = ({ children, ...otherProps }: IInputAdornmentProps) => (
    <MuiInputAdornment {...otherProps}>{children}</MuiInputAdornment>
)

export default InputAdornment
