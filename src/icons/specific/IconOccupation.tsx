import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconOccupation = ({ width, height }: IIconProps) => (
    <svg
        fill={primary.main}
        stroke={primary.main}
        width={width || 36}
        height={height || 36}
        viewBox='0 0 24 24'
        style={{ margin: '0px auto' }}>
        <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            fill='none'
            d='M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2'
        />
    </svg>
)
