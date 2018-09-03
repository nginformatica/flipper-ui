import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    children: React.ReactNode
    position?: 'absolute' | 'fixed' | 'static' | 'sticky'
    color?: 'default' | 'inherit' | 'primary' | 'secondary'
}

export const Header = ({ children, ...otherProps }: IProps) =>
    <AppBar { ...otherProps }>
        <Toolbar>
            { children }
        </Toolbar>
    </AppBar>

export default Header
