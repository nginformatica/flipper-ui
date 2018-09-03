import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react'
import { background } from '../colors'

interface IProps {
    children: React.ReactNode
    position?: 'absolute' | 'fixed' | 'static' | 'sticky'
    color?: 'default' | 'inherit' | 'primary' | 'secondary'
    style?: object
}

export const Header = ({ children, color, position, style }: IProps) =>
    <AppBar
        color={ color }
        position={ position }
        style={ style }>
        <Toolbar>
            { children }
        </Toolbar>
    </AppBar>

export default Header
