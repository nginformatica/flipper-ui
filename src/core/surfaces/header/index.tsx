import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import type { PaperProps } from '@/core/surfaces/paper'
import type { AppBarProps } from '@material-ui/core'

export interface HeaderProps extends Omit<PaperProps, 'classes'>, AppBarProps {
    position?: 'absolute' | 'fixed' | 'static' | 'sticky'
    color?: 'default' | 'inherit' | 'primary' | 'secondary'
}

const Header = ({
    children,
    padding,
    margin,
    style = {},
    elevation = 0,
    ...otherProps
}: HeaderProps) => (
    <AppBar
        {...otherProps}
        elevation={elevation}
        style={{ padding, margin, ...style }}>
        <Toolbar>{children}</Toolbar>
    </AppBar>
)

export default Header
