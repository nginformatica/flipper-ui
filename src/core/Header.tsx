import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    children: React.ReactNode
    position?: 'absolute' | 'fixed' | 'static' | 'sticky'
    color?: 'default' | 'inherit' | 'primary' | 'secondary'
}

const Header: React.SFC<IProps> = ({ children, padding, margin, style = {}, ...otherProps }) =>
    <AppBar
        { ...otherProps }
        style={ { padding, margin, ...style } }>
        <Toolbar>
            { children }
        </Toolbar>
    </AppBar>

export default Header
