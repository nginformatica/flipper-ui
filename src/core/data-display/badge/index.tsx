import { Badge as MuiBadge } from '@material-ui/core'
import React from 'react'
import { BadgeProps as MuiBadgeProps } from '@material-ui/core/Badge'
import { makeStyles } from '@material-ui/core/styles'
import type { DefaultProps } from '../../types'

export interface BadgeProps extends DefaultProps, MuiBadgeProps {
    children: React.ReactNode
    max?: number
    counter: number | string
    position?: {
        top?: number
        bottom?: number
        left?: number
        right?: number
    }
}

const useBadgeStyles = (position: BadgeProps['position']) => {
    const getStyles = makeStyles({
        badge: {
            ...position
        }
    })

    return getStyles()
}

const Badge = (props: BadgeProps) => {
    const {
        children,
        counter,
        padding,
        margin,
        position,
        style = {},
        ...otherProps
    } = props

    const classes = useBadgeStyles(position)

    return (
        <MuiBadge
            badgeContent={counter}
            classes={classes}
            style={{ padding, margin, ...style }}
            {...otherProps}>
            {children}
        </MuiBadge>
    )
}

export default Badge
