import React from 'react'
import { Menu as MuiMenu } from '@material-ui/core'
import type { DefaultProps } from '../../types'
import type { MenuProps as MuiMenuProps } from '@material-ui/core/Menu'

export interface MenuProps extends DefaultProps, MuiMenuProps {
    open: boolean
    anchorEl?: HTMLElement
    withWrapper?: boolean
}

const Menu = ({
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
