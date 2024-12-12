import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconTriangleUp = ({
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
        <path d='M12 1.5L24 22.3525H0L12 1.5Z' fill={color || primary.main} />
    </svg>
)
