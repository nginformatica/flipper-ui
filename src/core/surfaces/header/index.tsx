import { AppBar, Toolbar, AppBarProps } from '@material-ui/core'
import React from 'react'
import { PaperProps } from '@/core/surfaces/paper'

export interface HeaderProps extends Omit<PaperProps, 'classes'>, AppBarProps {
    position?: 'absolute' | 'fixed' | 'static' | 'sticky'
    color?: 'default' | 'inherit' | 'primary' | 'secondary'
}

export const Header = ({
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
