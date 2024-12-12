import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconTree = ({ width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '0 0 24 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fill={primary.main}
            d='M3 3H9V7H3V3ZM15 10H21V14H15V10ZM15 17H21V21H15V17ZM13 13H7V18H13V20 H5V9H7V11H13V13Z'
        />
    </svg>
)
