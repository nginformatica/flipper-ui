import MuiDrawer, { DrawerProps } from '@material-ui/core/Drawer'
import React, { FC } from 'react'
import { IDefault } from './Advertise'

const Drawer: FC<DrawerProps & IDefault> = props => {
    const { style, margin, padding, ...otherProps } = props

    return (
        <MuiDrawer
            { ...otherProps }
            style={ { margin, padding, ...style } }>
            { props.children }
        </MuiDrawer>
    )
}

export default Drawer
