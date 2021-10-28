import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@material-ui/core/Drawer'
import React, { FC } from 'react'
import { DefaultProps } from './types'
import { makeStyles, createStyles } from '@material-ui/core/styles'

interface DrawerProps extends MuiDrawerProps, DefaultProps {
    top?: number
    width?: number
}

const getStyles = (top?: number, width?: number) =>
    makeStyles(() =>
        createStyles({
            drawer: {
                top,
                width
            },
            drawerPaper: {
                top: 'inherit',
                width: 'inherit',
                height: top ? `calc(100% - ${top}px)` : '100%'
            }
        })
    )

const Drawer: FC<DrawerProps> = props => {
    const { style, margin, padding, top = 0, width, ...otherProps } = props
    const useStyles = getStyles(top, width)
    const classes = useStyles()

    return (
        <MuiDrawer
            { ...otherProps }
            classes={ {
                root: classes.drawer,
                paper: classes.drawerPaper
            } }
            style={ { margin, padding, ...style } }>
            { props.children }
        </MuiDrawer>
    )
}

export default Drawer
