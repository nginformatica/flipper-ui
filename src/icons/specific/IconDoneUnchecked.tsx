import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { gray } = theme.colors

export const IconDoneUnchecked = ({ width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '0 0 24 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fill={gray[400]}
            d='M19.1723 4.50676L20.4646 5.74685L8.70462 17.0317L3.53539 12.0713L4.8277 10.8312L8.70462 14.5515L19.1723 4.50676ZM19.1723 2L8.70462 12.0448L4.8277 8.32448L0.92308 12.0713L8.70462 19.5385L23.0769 5.74685L19.1723 2Z'
        />
    </svg>
)
