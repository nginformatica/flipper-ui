import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { lightGreen, gray } = theme.colors

interface ICircleInner extends IIconProps {
    isGray?: boolean
}

export const IconCircleInner = ({
    isGray,
    width,
    height,
    viewBox
}: ICircleInner) => (
    <svg
        fill='none'
        width={width || 25}
        height={height || 24}
        viewBox={viewBox || '0 0 25 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <circle
            cx='12.5'
            cy='12'
            r='12'
            fill={isGray ? gray[500] : lightGreen[400]}
        />
        <circle
            cx='12.5'
            cy='12'
            r='6'
            fill={isGray ? gray[700] : lightGreen[700]}
        />
    </svg>
)
