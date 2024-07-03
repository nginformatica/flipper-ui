import React from 'react'
import MuiMenu from '@mui/material/Menu'
import type { DefaultProps } from '../../types'
import type { MenuProps } from '@mui/material/Menu'

export interface IMenuProps extends DefaultProps, MenuProps {
    open: boolean
    anchorEl?: HTMLElement
    withWrapper?: boolean
    anchorOrigin?: {
        vertical: 'top' | 'center' | 'bottom' | number
        horizontal: 'left' | 'center' | 'right' | number
    }
}

const Menu = ({
    children,
    padding,
    margin,
    anchorOrigin = { vertical: 'top', horizontal: 'left' },
    style = {},
    withWrapper,
    ...otherProps
}: IMenuProps) => (
    <MuiMenu
        {...otherProps}
        anchorOrigin={{
            vertical: anchorOrigin.vertical,
            horizontal: anchorOrigin.horizontal
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
