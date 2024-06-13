import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import type { DefaultProps } from '@/core/types'
import type { AppBarProps } from '@mui/material/AppBar'

export interface HeaderProps extends DefaultProps, AppBarProps {
    position?: 'absolute' | 'fixed' | 'static' | 'sticky'
    color?: 'default' | 'inherit' | 'primary' | 'secondary'
    square?: boolean
    elevation?: number
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
