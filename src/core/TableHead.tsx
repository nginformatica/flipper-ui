import { withStyles } from '@material-ui/core/styles'
import MuiTableHead from '@material-ui/core/TableHead'
import React, { ReactNode, FC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    children: ReactNode
    color?: 'primary' | 'secondary' | 'default' | 'inherit'
    classes: {
        default: string
        inherit: string
        primary: string
        secondary: string
    }
}

const styles = theme => ({
    default: {
        color: theme.palette.background.default
    },
    inherit: {
        color: 'inherit'
    },
    primary: {
        color: theme.palette.primary.main
    },
    secondary: {
        color: theme.palette.secondary.main
    }
})

const TableHead: FC<IProps> = ({
    style,
    margin,
    padding,
    children,
    color,
    classes,
    ...otherProps
}) =>
    <MuiTableHead
        { ...otherProps }
        style={ { padding, margin, ...style } }
        classes={
            color
                ? {
                    root: classes[color]
                }
                : {}
        }>
        { children }
    </MuiTableHead>

export default withStyles(styles)(TableHead)
