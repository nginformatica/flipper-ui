import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconScheduleDashboard = ({
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
            fill={primary.main}
            d='M18 2H16V0H14V2H6V0H4V2H2C0.89 2 0.00999999 2.90.00999999 4L0 18C0 19.1 0.89 20 2 20H18C19.1 20 20 19.1 20 18V4C20 2.9 19.1 2 18 2ZM18 18H2V7H18V18ZM4 9H9V14H4V9Z'
        />
    </svg>
)
