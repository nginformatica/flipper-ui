import { AppBar, Toolbar } from '@material-ui/core'
import React, { FC } from 'react'
import { PaperProps } from './Paper'

export interface HeaderProps extends PaperProps {
    position?: 'absolute' | 'fixed' | 'static' | 'sticky'
    color?: 'default' | 'inherit' | 'primary' | 'secondary'
}

const Header: FC<HeaderProps> = ({
    children,
    padding,
    margin,
    style = {},
    elevation = 0,
    ...otherProps
}) => (
    <AppBar
        {...otherProps}
        elevation={elevation}
        style={{ padding, margin, ...style }}>
        <Toolbar>{children}</Toolbar>
    </AppBar>
)

export default Header
