import { InputAdornment as MuiInputAdornment } from '@material-ui/core'
import React, { FC } from 'react'
import { DefaultProps } from './types'

export interface InputAdornmentProps extends DefaultProps {
    position: 'start' | 'end'
}

const InputAdornment: FC<InputAdornmentProps> = ({
    children,
    ...otherProps
}) => <MuiInputAdornment {...otherProps}>{children}</MuiInputAdornment>

export default InputAdornment
