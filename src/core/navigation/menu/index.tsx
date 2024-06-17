import React from 'react'
import MuiMenu from '@mui/material/Menu'
import type { DefaultProps } from '../../types'
import type { MenuProps } from '@mui/material/Menu'

export interface IMenuProps extends DefaultProps, MenuProps {
    open: boolean
    anchorEl?: HTMLElement
    withWrapper?: boolean
    vertical?: 'top' | 'bottom'
    horizontal?: 'left' | 'right'
}

const Menu = ({
    children,
    padding,
    margin,
    vertical,
    horizontal,
    style = {},
    withWrapper,
    ...otherProps
}: IMenuProps) => (
    <MuiMenu
        {...otherProps}
        anchorOrigin={{
            vertical: vertical || 'top',
            horizontal: horizontal || 'left'
        }}
        style={{ padding, margin, ...style }}>
        {withWrapper ? (
            <div role='menu-wrapper-container'>{children}</div>
        ) : (
            children
        )}
    </MuiMenu>
)

export default Menu
