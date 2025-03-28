import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { gray } = theme.colors

export const IconCircleReturn = ({ width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 25}
        height={height || 24}
        viewBox={viewBox || '0 0 25 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fill={gray[400]}
            d='M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z'
        />
        <path
            fill={gray[700]}
            d='M10.2353 12.6L6 9.3L10.2353 6V8.2H13.9019C16.1653 8.2 18 10.1699 18 12.6C18 15.03 16.1653 17 13.9019 17H7.41176V14.8H13.9019C14.9305 14.8 15.8824 13.8839 15.8824 12.6C15.8824 11.3161 14.9305 10.4 13.9019 10.4H10.2353V12.6Z'
        />
    </svg>
)
