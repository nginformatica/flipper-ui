import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { neutral } = theme.colors

export const IconEquipment = ({
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
            fill={color || neutral[50]}
            d='M7.91138 4V5.72619H9.57343V6.58929H11.2355V5.72619H12.8975V4H7.91138ZM7.08036 7.45238L5.41831 10.0417H3.75626V13.494H5.41831L7.08036 16.0833H12.8975L14.5596 13.494V7.45238H7.08036ZM15.3906 7.45238V13.494H17.0527V7.45238H15.3906ZM11.2355 8.74702L10.4824 10.9048H11.7289L8.74241 14.0065L9.65134 11.7679H8.48271L11.2355 8.74702ZM1.26318 9.17857V14.3571H2.92523V9.17857H1.26318Z'
        />
    </svg>
)
