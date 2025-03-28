import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { gray } = theme.colors

export const IconLamp = ({ width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || '24'}
        height={height || '24'}
        viewBox={viewBox || '0 0 24 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <circle cx='12' cy='12' r='12' fill={gray[400]} />
        <path
            d='M9 18.25C9 17.8358 9.33579 17.5 9.75 17.5H14.25C14.6642 17.5 15 17.8358 15 18.25C15 18.6642 14.6642 19 14.25 19H9.75C9.33579 19 9 18.6642 9 18.25Z'
            fill={gray[600]}
        />
        <path
            d='M9 20.25C9 19.8358 9.33579 19.5 9.75 19.5H14.25C14.6642 19.5 15 19.8358 15 20.25C15 20.6642 14.6642 21 14.25 21H9.75C9.33579 21 9 20.6642 9 20.25Z'
            fill={gray[600]}
        />
        <path
            d='M6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 11.2208 16.7934 13.1599 15 14.1973V16C15 16.5523 14.5523 17 14 17H10C9.44772 17 9 16.5523 9 16V14.1973C7.2066 13.1599 6 11.2208 6 9Z'
            fill={gray[600]}
        />
    </svg>
)
