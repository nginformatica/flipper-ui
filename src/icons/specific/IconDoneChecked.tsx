import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { secondary } = theme.colors

export const IconDoneChecked = ({ width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '0 0 24 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fill={secondary.main}
            d='M19.1723 2L8.70462 12.0448L4.8277 8.32448L0.92308 12.0713L8.70462 19.5385L23.0769 5.74685L19.1723 2Z'
        />
    </svg>
)
