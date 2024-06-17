import React from 'react'
import MuiDrawer from '@mui/material/Drawer'
import type { DefaultProps } from '../../types'
import type { DrawerProps } from '@mui/material/Drawer'

export interface IDrawerProps extends DrawerProps, DefaultProps {
    top?: number
    width?: number
}

const Drawer = (props: IDrawerProps) => {
    const { style, margin, padding, top = 0, width, ...otherProps } = props

    return (
        <MuiDrawer
            {...otherProps}
            PaperProps={{
                style: {
                    top: 'inherit',
                    width: 'inherit',
                    height: `calc(100% - ${top}px)`
                }
            }}
            style={{ margin, padding, top, width, ...style }}>
            {props.children}
        </MuiDrawer>
    )
}

export default Drawer
