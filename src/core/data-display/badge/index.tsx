import React from 'react'
import type { ReactNode } from 'react'
import { Badge as MuiBadge } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import type { DefaultProps } from '../../types'
import type { BadgeProps as MuiBadgeProps } from '@material-ui/core/Badge'

export interface BadgeProps extends DefaultProps, MuiBadgeProps {
    children: ReactNode
    /**
     * The number to display in the badge.
     */
    counter: number | string
    /**
     * The position of the badge.
     */
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

export const Badge = (props: BadgeProps) => {
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
