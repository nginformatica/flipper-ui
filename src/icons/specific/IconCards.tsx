import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconCards = ({ color, width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '0 0 24 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fill={color || primary.main}
            d='M6 11.5V6H11.5V11.5H6ZM6 18V12.5H11.5V18H6ZM12.5 11.5V6H18V11.5H12.5ZM12.5 18V12.5H18V18H12.5ZM5 21C4.45 21 3.979 20.804 3.587 20.412C3.195 20.02 2.99934 19.5493 3 19V5C3 4.45 3.196 3.979 3.588 3.587C3.98 3.195 4.45067 2.99934 5 3H19C19.55 3 20.021 3.196 20.413 3.588C20.805 3.98 21.0007 4.45067 21 5V19C21 19.55 20.804 20.021 20.412 20.413C20.02 20.805 19.5493 21.0007 19 21H5ZM5 19H19V5H5V19Z'
        />
    </svg>
)
