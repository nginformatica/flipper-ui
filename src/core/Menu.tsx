import { Menu as MuiMenu } from '@material-ui/core'
import React, { FC } from 'react'
import { IDefault } from './Advertise'
import { MenuProps } from '@material-ui/core/Menu'
import { PopoverProps } from '@material-ui/core/Popover'

interface IProps extends IDefault, PopoverProps, MenuProps {
    open: boolean
    anchorEl?: HTMLElement
    withWrapper?: boolean
}

const Menu: FC<IProps> = ({
    children,
    padding,
    margin,
    style = {},
    withWrapper,
    ...otherProps
}) =>
    <MuiMenu
        { ...otherProps }
        style={ { padding, margin, ...style } }>
        { withWrapper ? <div>{ children }</div> : children }
    </MuiMenu>

export default Menu
