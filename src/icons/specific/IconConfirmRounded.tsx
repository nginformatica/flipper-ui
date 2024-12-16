import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { lightGreen, priority } = theme.colors

export const IconConfirmRounded = ({ width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '0 0 24 24'}>
        <ellipse
            cx='12.0982'
            cy='11.653'
            rx='11.5102'
            ry='11.5102'
            fill={priority.main.low}
        />
        <rect
            x='9.91003'
            y='18.2217'
            width='8.82059'
            height='4'
            transform='rotate(-135 9.91003 18.2217)'
            fill={lightGreen[700]}
        />
        <rect
            x='7.01056'
            y='15.3926'
            width='14'
            height='4'
            transform='rotate(-45 7.01056 15.3926)'
            fill={lightGreen[700]}
        />
    </svg>
)
