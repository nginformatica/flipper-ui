import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconCancelNote = ({
    color,
    width,
    height,
    viewBox
}: IIconProps) => (
    <svg
        fill='none'
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '0 0 24 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fill={color || primary.main}
            d='M20 15.1665L17.916 17.2498L20 19.3335L18.3334 21L16.2494 18.9163L14.1666 20.9996L12.5 19.3332L14.5829 17.2498L12.5 15.1668L14.1666 13.5004L16.2494 15.5834L18.333 13.5L20 15.1665Z'
        />
        <path
            fill={color || primary.main}
            d='M3.5 10H14.5V12H3.5V10ZM3.5 8H14.5V6H3.5V8ZM3.5 16H10.5V14H3.5V16Z'
        />
    </svg>
)
