import React from 'react'
import { getIconColor, type IIconProps } from '../utils'

export const IconDistribution = ({
    active,
    card,
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
            fillRule='evenodd'
            clipRule='evenodd'
            fill={getIconColor({ active, card })}
            d='M12 2H4C2.9 2 2.01 2.9 2.01 4L2 20C2 21.1 2.89 22 3.99 22H14L14 19.5H8V18H6V16H8V14H6V12H14L14 9H11V3.5L14.9625 7.46249L18 10.2663V8L12 2Z'
        />
        <path
            fill={getIconColor({ active, card })}
            d='M15.5 22L22 16L15.5 10L15.5 14H9V18H15.5L15.5 22Z'
        />
    </svg>
)
