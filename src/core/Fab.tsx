import { Fab as MuiFab } from '@material-ui/core'
import React, { MouseEvent } from 'react'
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
    onClick?: (event?: MouseEvent<HTMLElement>) => void
    children: React.ReactElement<{}>
}

const Fab = ({
    children,
    margin,
    padding,
    style = {},
    variant,
    ...otherProps
}: IProps) =>
    <MuiFab
        { ...otherProps }
        variant={ variant }
        style={ { margin, padding, ...style } }>
        { children }
    </MuiFab>

export default Fab
