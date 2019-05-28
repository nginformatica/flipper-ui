import { Menu as MuiMenu } from '@material-ui/core'
import React, { FC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    open: boolean
    anchorEl?: HTMLElement
    menuProps?: object
    anchorOrigin?: {
        horizontal: number | 'left' | 'center' | 'right',
        vertical: number | 'top' | 'center' | 'bottom',
    },
    transformOrigin?: {
        vertical: number | 'top' | 'center' | 'bottom',
        horizontal: number | 'left' | 'center' | 'right',
    }
    onClose?: () => void
}

const Menu: FC<IProps> = ({
    children,
    menuProps,
    padding,
    margin,
    style = {},
    ...otherProps
}) =>
    <MuiMenu
        MenuListProps={ menuProps }
        style={ { padding, margin, ...style } }
        { ...otherProps }>
        { children }
    </MuiMenu>

export default Menu
