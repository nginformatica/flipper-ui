import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { neutral, primary } = theme.colors

export const IconReturn = ({ color, width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '0 0 24 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fill={color || primary.main}
            d='M8.47059 14.2059L0 7.85294L8.47059 1.5V5.73529H15.8039C20.3305 5.73529 24 9.5277 24 14.2059C24 18.884 20.3305 22.6765 15.8039 22.6765H2.82353V18.4412H15.8039C17.8609 18.4412 19.7647 16.6776 19.7647 14.2059C19.7647 11.7342 17.8609 9.97059 15.8039 9.97059H8.47059V14.2059Z'
        />
        <defs>
            <clipPath id='clip0_463_253'>
                <rect width='24' height='24' fill={neutral[50]} />
            </clipPath>
        </defs>
    </svg>
)
