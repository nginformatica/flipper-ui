import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { neutral, primary } = theme.colors

export const IconActionPlans = ({
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
        <g clip-path='url(#clip0_319_7156)'>
            <path
                fill={color || primary.main}
                d='M10.8 0V2.4H5.99998C5.33723 2.4 4.79998 2.93726 4.79998 3.6V7.2H7.2L3.6 10.8L0 7.2H2.39998V2.4C2.39998 1.07452 3.47449 0 4.79998 0H10.8Z'
            />
            <path
                fill={color || primary.main}
                d='M18 12C21.3137 12 24 9.3137 24 6C24 2.6863 21.3137 0 18 0C14.6863 0 12 2.6863 12 6C12 9.3137 14.6863 12 18 12Z'
            />
            <path
                fill={color || primary.main}
                d='M8.54558 23.9396L11.9397 20.5456L9.39411 18L11.9397 15.4544L8.54558 12.0604L5.99999 14.6059L3.45441 12.0604L0.0602986 15.4544L2.60588 18L0.0602966 20.5456L3.45441 23.9396L5.99999 21.3941L8.54558 23.9396Z'
            />
            <path
                fill={color || primary.main}
                d='M13.2 21.6V24H19.2C20.5255 24 21.6 22.9255 21.6 21.6V16.8H24L20.4 13.2L16.8 16.8H19.2V20.4C19.2 21.0628 18.6628 21.6 18 21.6H13.2Z'
            />
        </g>
        <defs>
            <clipPath id='clip0_319_7156'>
                <rect width='24' height='24' fill={neutral[50]} />
            </clipPath>
        </defs>
    </svg>
)
