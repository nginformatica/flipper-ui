import {
    InputAdornment as MuiInputAdornment,
    InputAdornmentProps as MuiInputAdornmentProps
} from '@material-ui/core'
import React from 'react'
import { DefaultProps } from '../../types'

export interface InputAdornmentProps
    extends DefaultProps,
        MuiInputAdornmentProps {
    position: 'start' | 'end'
}

export const InputAdornment = ({
    children,
    ...otherProps
}: InputAdornmentProps) => (
    <MuiInputAdornment {...otherProps}>{children}</MuiInputAdornment>
)

export default InputAdornment
