import { Menu as MuiMenu } from '@material-ui/core'
import React, { FC } from 'react'
import { DefaultProps } from './types'
import { MenuProps as MuiMenuProps } from '@material-ui/core/Menu'

interface MenuProps extends DefaultProps, MuiMenuProps {
    open: boolean
    anchorEl?: HTMLElement
    withWrapper?: boolean
}

const Menu: FC<MenuProps> = ({
    children,
    padding,
    margin,
    style = {},
    withWrapper,
    ...otherProps
}) =>
    <MuiMenu
        { ...otherProps }
        style={ { padding, margin, ...style } }>
        { withWrapper ? <div>{ children }</div> : children }
    </MuiMenu>

export default Menu
