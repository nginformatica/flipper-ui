import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { deepOrange } = theme.colors

export const IconQuestion = ({ width, height, viewBox }: IIconProps) => (
    <svg
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '0 0 24 24'}>
        <path
            fill={deepOrange[600]}
            d='M12 2C6.48003 2 2.00003 6.48 2.00003 12C2.00003 14.2504 2.74395 16.3284 4.00003 18C4.00003 21 2.00003 22.5 1.00003 23C3.00003 23 6.50003 22.5 8.00003 21.167C9.22515 21.7027 10.5781 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 18H11V16H13V18ZM8.00003 10C8.00003 7.79 9.79003 6 12 6C14.21 6 16 7.79 16 10C16 11.2829 15.21 11.9733 14.4408 12.6455C13.711 13.2833 13 13.9046 13 15H11C11 13.1787 11.9421 12.4566 12.7705 11.8217C13.4203 11.3236 14 10.8792 14 10C14 8.9 13.1 8 12 8C10.9 8 10 8.9 10 10H8.00003Z'
        />
    </svg>
)
