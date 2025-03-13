import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { neutral, primary } = theme.colors

export const IconEnvironmentalReports = ({
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
            d='M1.65 0H8.25L13.2 5.04V6H11.25C10.3425 6 9.60826 6.756 9.60826 7.68V8.4H3.3V10.08H9.60826V11.76H3.3V13.44H9.60826V16.8H1.64174C0.73425 16.8 0 16.044 0 15.12L0.00825019 1.68C0.00825019 0.756 0.7425 0 1.65 0ZM7.425 1.26V5.88H11.9625L7.425 1.26Z'
        />
        <path
            fill={color || primary.main}
            d='M19.05 7.2H12.45C11.5425 7.2 10.8083 7.956 10.8083 8.88L10.8 22.32C10.8 23.244 11.5342 24 12.4417 24H22.35C23.2576 24 24 23.244 24 22.32V12.24L19.05 7.2ZM20.7 20.64H14.1V18.96H20.7V20.64ZM20.7 17.28H14.1V15.6H20.7V17.28ZM18.225 13.08V8.46L22.7626 13.08H18.225Z'
        />
        <defs>
            <clipPath id='clip0_319_7152'>
                <rect width='24' height='24' fill={neutral[50]} />
            </clipPath>
        </defs>
    </svg>
)
