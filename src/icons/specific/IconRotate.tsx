import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { neutral, primary } = theme.colors

export const IconRotate = ({ color, width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '0 0 24 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <g clip-path='url(#clip0_463_255)'>
            <path
                d='M11.2281 13.0577L5.61404 20.75L0 13.0577H2.80701C2.80701 1.51923 13.3333 0.75 13.3333 0.75C11.6959 2.03205 8.42105 6.28847 8.42105 13.0577H11.2281Z'
                fill={color || primary.main}
            />
            <path
                d='M12.7719 11.1089L18.386 3.41667L24 11.1089H21.1929C21.1929 22.6475 10.6667 23.4167 10.6667 23.4167C12.3041 22.1347 15.5789 17.8783 15.5789 11.1089H12.7719Z'
                fill={color || primary.main}
            />
        </g>
        <defs>
            <clipPath id='clip0_463_255'>
                <rect width='24' height='24' fill={neutral[50]} />
            </clipPath>
        </defs>
    </svg>
)
