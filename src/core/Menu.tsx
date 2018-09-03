import { Menu as MuiMenu } from '@material-ui/core'
import React from 'react'

interface IProps {
    open: boolean
    anchorEl?: HTMLElement
    children?: React.ReactNode
    menuProps?: object
    onClose?: () => {}
}

const Menu = ({ children, menuProps, ...otherProps }: IProps) =>
    <MuiMenu MenuListProps={ menuProps } { ...otherProps }>
        { children }
    </MuiMenu>

export default Menu
