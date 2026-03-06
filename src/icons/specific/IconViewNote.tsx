import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconViewNote = ({ color, width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '0 0 24 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fill={color || primary.main}
            d='M3.5 10H14.5V12H3.5V10ZM3.5 8H14.5V6H3.5V8ZM3.5 16H10.5V14H3.5V16Z'
        />
        <path
            fill={color || primary.main}
            d='M16.5 14.5C14.4545 14.5 12.7077 15.8477 12 17.75C12.7077 19.6523 14.4545 21 16.5 21C18.5455 21 20.2923 19.6523 21 17.75C20.2923 15.8477 18.5455 14.5 16.5 14.5ZM16.5 19.9167C15.3709 19.9167 14.4545 18.946 14.4545 17.75C14.4545 16.554 15.3709 15.5833 16.5 15.5833C17.6291 15.5833 18.5455 16.554 18.5455 17.75C18.5455 18.946 17.6291 19.9167 16.5 19.9167ZM16.5 16.45C15.8209 16.45 15.2727 17.0307 15.2727 17.75C15.2727 18.4693 15.8209 19.05 16.5 19.05C17.1791 19.05 17.7273 18.4693 17.7273 17.75C17.7273 17.0307 17.1791 16.45 16.5 16.45Z'
        />
    </svg>
)
