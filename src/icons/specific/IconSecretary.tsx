import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconSecretary = ({
    color,
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
            fill={color || primary.main}
            d='M0.0625 10.123H23.9375V12.3777H0.0625V10.123Z'
        />
        <path
            fill={color || primary.main}
            d='M0.71875 13.7852V23.9996H23.2803V13.7852H0.71875ZM9.84189 17.5266H11.2725V16.096H12.6797V17.5266H14.1103V18.9338H12.6797V20.3644H11.2725V18.9338H9.84189V17.5266Z'
        />
        <path
            fill={color || primary.main}
            d='M10.1468 5.44922L12.0067 7.61602L13.9329 5.4558C15.3063 5.62235 16.374 6.79521 16.374 8.2129V8.46838H7.64674V8.2129C7.64674 6.77501 8.74505 5.58889 10.1468 5.44922Z'
        />
        <path
            fill={color || primary.main}
            d='M13.2559 5.43555L12.0034 6.84026L10.7976 5.43555H13.2559Z'
        />
        <path
            fill={color || primary.main}
            d='M11.9995 0.259766C13.2965 0.259766 14.3516 1.31488 14.3516 2.61177C14.3516 3.90869 13.2965 4.96378 11.9995 4.96378C10.7026 4.96378 9.64752 3.90867 9.64752 2.61177C9.64752 1.31488 10.7026 0.259766 11.9995 0.259766Z'
        />
    </svg>
)
