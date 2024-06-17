import React from 'react'
import MuiBadge from '@mui/material/Badge'
import type { DefaultProps } from '../../types'
import type { BadgeProps } from '@mui/material/Badge'

export interface IBadge extends DefaultProps, BadgeProps {
    counter: number | string
    overlap?: 'rectangular' | 'circular'
    vertical?: 'top' | 'bottom'
    horizontal?: 'right' | 'left'
    color?:
        | 'default'
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning'
}

const Badge = (props: IBadge) => {
    const {
        children,
        color,
        overlap,
        counter,
        vertical = 'top',
        horizontal = 'right',
        margin,
        padding,
        style = {},
        ...otherProps
    } = props

    return (
        <MuiBadge
            color={color}
            overlap={overlap}
            badgeContent={counter}
            anchorOrigin={{
                vertical: vertical,
                horizontal: horizontal
            }}
            style={{ padding, margin, ...style }}
            {...otherProps}>
            {children}
        </MuiBadge>
    )
}

export default Badge
