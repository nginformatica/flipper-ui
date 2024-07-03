import React from 'react'
import MuiList from '@mui/material/List'
import MuiListHeader from '@mui/material/ListSubheader'
import { createStyles, makeStyles } from '@mui/styles'
import type { DefaultProps } from '../../types'
import { theme } from '@/theme'

const { app } = theme.colors

export interface ListProps extends DefaultProps {
    title?: string
    dense?: boolean
    color?: 'default' | 'inherit'
}

const useStyles = makeStyles(() =>
    createStyles({
        default: {
            backgroundColor: app.background.main
        },
        inherit: {
            backgroundColor: 'inherit',
            color: 'inherit'
        }
    })
)

const List = ({
    title,
    padding,
    margin,
    style = {},
    color = 'default',
    className,
    children,
    ...otherProps
}: ListProps) => {
    const classes = useStyles()

    return (
        <MuiList
            subheader={
                title && (
                    <MuiListHeader className={classes[color]}>
                        {title}
                    </MuiListHeader>
                )
            }
            className={`${classes[color]} ${className}`}
            style={{ padding, margin, ...style }}
            {...otherProps}>
            {children}
        </MuiList>
    )
}

export default List
