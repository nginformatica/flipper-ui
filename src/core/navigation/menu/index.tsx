import { Menu as MuiMenu } from '@material-ui/core'
import React from 'react'
import { DefaultProps } from '../../types'
import { MenuProps as MuiMenuProps } from '@material-ui/core/Menu'

export interface MenuProps extends DefaultProps, MuiMenuProps {
    open: boolean
    anchorEl?: HTMLElement
    withWrapper?: boolean
}

export const Menu = ({
    children,
    padding,
    margin,
    style = {},
    withWrapper,
    ...otherProps
}: MenuProps) => (
    <MuiMenu {...otherProps} style={{ padding, margin, ...style }}>
        {withWrapper ? (
            <div role='menu-wrapper-container'>{children}</div>
        ) : (
            children
        )}
    </MuiMenu>
)

export default Menu
