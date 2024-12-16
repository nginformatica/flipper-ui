import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { orange, pink } = theme.colors

export const IconGift = ({ width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '0 0 64 64'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fill={orange[300]}
            d='M43.4876 24.3272L48.8757 16.097C51.1902 12.5617 50.0088 7.04111 46 5L33 27C36.9624 29.0338 41.1922 27.8334 43.4876 24.3272Z'
        />
        <path
            fill={orange[600]}
            d='M17.0604 15.5748L22.1423 24.1659C24.3068 27.8251 29.2403 29.0935 32.9769 26.9696L46 5.03499C42.219 2.90437 37.3843 4.16878 35.2014 7.85913C34.5671 8.93138 33.7725 10.143 32.97 11.4333C32.1862 10.1439 31.4009 8.93199 30.7525 7.85912C28.5695 4.16877 23.7348 2.90437 19.9539 5.03499C16.1729 7.16561 14.8775 11.8844 17.0604 15.5748Z'
        />
        <path
            fill={pink[800]}
            d='M56 26H32V60H48.6957C52.7297 60 56 56.8665 56 53.0012V26Z'
        />
        <path
            fill={pink[900]}
            d='M8 26H32V60H15C11.134 60 8 56.8665 8 53.0012V26Z'
        />
        <path
            fill={pink[700]}
            d='M60 22.5322C60 18.9246 56.7499 16 52.7407 16H32V30H60V22.5322Z'
        />
        <path
            fill={pink[800]}
            d='M4 22.5322C4 18.9246 7.13401 16 11 16H32V30H4V22.5322Z'
        />
        <rect x='32' y='16' width='6' height='44' fill={orange[300]} />
        <rect x='26' y='16' width='6' height='44' fill={orange[600]} />
    </svg>
)
