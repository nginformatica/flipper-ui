import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { darkBlue, deepOrange, lightBlue, lightBrown } = theme.colors

export interface ITriangleCircleDown extends IIconProps {
    isRed?: boolean
}

export const IconTriangleCircleDown = ({
    isRed,
    width,
    height,
    viewBox
}: ITriangleCircleDown) => (
    <svg
        fill='none'
        width={width || 25}
        height={height || 24}
        viewBox={viewBox || '0 0 25 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fill={isRed ? deepOrange[600] : lightBlue[500]}
            d='M12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0Z'
        />
        <path
            fill={isRed ? lightBrown[900] : darkBlue[700]}
            d='M5.5 8H19.5L12.5 19L5.5 8Z'
        />
    </svg>
)
