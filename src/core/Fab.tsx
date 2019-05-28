import { Fab as MuiFab } from '@material-ui/core'
import React, { ReactNode, FC, MouseEvent } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    disabled?: boolean
    component?: string
    color?: 'default' | 'primary' | 'inherit' | 'secondary'
    size?: 'small' | 'medium' | 'large'
    href?: string
    variant?:
        | 'round'
        | 'extended'
    children?: ReactNode
    onClick?: (event?: MouseEvent<HTMLElement>) => void
}

const Fab: FC<IProps> = ({
    children,
    margin,
    padding,
    style = {},
    variant,
    ...otherProps
}) =>
    <MuiFab
        { ...otherProps }
        variant={ variant }
        style={ { margin, padding, ...style } }>
        { children }
    </MuiFab>

export default Fab
