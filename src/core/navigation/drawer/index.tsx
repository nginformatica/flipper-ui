import React from 'react'
import MuiDrawer from '@material-ui/core/Drawer'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { DefaultProps } from '../../types'
import type { DrawerProps as MuiDrawerProps } from '@material-ui/core/Drawer'

export interface DrawerProps extends MuiDrawerProps, DefaultProps {
    top?: number
    width?: number
}

const getStyles = (top: number, width?: number) =>
    makeStyles(() =>
        createStyles({
            drawer: {
                top,
                width
            },
            drawerPaper: {
                top: 'inherit',
                width: 'inherit',
                height: `calc(100% - ${top}px)`
            }
        })
    )

const Drawer = (props: DrawerProps) => {
    const { style, margin, padding, top = 0, width, ...otherProps } = props
    const useStyles = getStyles(top, width)
    const classes = useStyles()

    return (
        <MuiDrawer
            {...otherProps}
            classes={{
                root: classes.drawer,
                paper: classes.drawerPaper
            }}
            style={{ margin, padding, ...style }}>
            {props.children}
        </MuiDrawer>
    )
}

export default Drawer
