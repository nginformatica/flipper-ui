import MuiIconButton from '@material-ui/core/IconButton'
import React, { FC, MouseEvent } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    color?: 'default' | 'inherit' | 'primary' | 'secondary'
    disabled?: boolean
    onClick?:(event: MouseEvent<HTMLButtonElement>) => void
}

const IconButton: FC<IProps> = ({
    children,
    padding,
    margin,
    style,
    ...otherProps
}) =>
    <MuiIconButton
        { ...otherProps }
        style={ { margin, padding, ...style } }>
        { children }
    </MuiIconButton>

export default IconButton
