import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { lightBrown, priority } = theme.colors

export const IconCancelRounded = ({ width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '0 0 24 24'}>
        <ellipse
            cx='11.4727'
            cy='11.51'
            rx='11.4727'
            ry='11.5102'
            fill={priority.main.critical}
        />
        <rect
            x='14.91'
            y='18.2217'
            width='14'
            height='4'
            transform='rotate(-135 14.91 18.2217)'
            fill={lightBrown[900]}
        />
        <rect
            x='5.01056'
            y='15.3926'
            width='14'
            height='4'
            transform='rotate(-45 5.01056 15.3926)'
            fill={lightBrown[900]}
        />
    </svg>
)
