import React from 'react'
import {
    List as MuiList,
    ListSubheader as MuiListHeader
} from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { DefaultProps } from '../../types'
import type { Theme } from '@material-ui/core/styles'

export interface ListProps extends DefaultProps {
    title?: string
    dense?: boolean
    color?: 'primary' | 'secondary' | 'default' | 'inherit'
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        default: {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary
        },
        inherit: {
            backgroundColor: 'inherit',
            color: 'inherit'
        },
        primary: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText
        },
        secondary: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText
        }
    })
)

const List = ({
    title,
    padding,
    margin,
    style = {},
    children,
    className,
    color = 'default',
    ...otherProps
}: ListProps) => {
    const classes = useStyles()

    return (
        <MuiList
            subheader={
                title ? (
                    <MuiListHeader className={classes[color]}>
                        {title}
                    </MuiListHeader>
                ) : undefined
            }
            className={`${classes[color]} ${className}`}
            style={{ padding, margin, ...style }}
            {...otherProps}>
            {children}
        </MuiList>
    )
}

export default List
