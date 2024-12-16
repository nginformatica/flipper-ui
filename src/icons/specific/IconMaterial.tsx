import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { deepOrange } = theme.colors

export const IconMaterial = ({ width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '0 0 24 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fill={deepOrange[600]}
            fillRule='evenodd'
            clipRule='evenodd'
            d='M3.38824 11.8588L8.25882 14.1882V13.3412L3.38824 11.0118V11.8588ZM0 12.7059L10.3765 18L18 12.7059V3.38824L8.68235 0L0 3.38824V12.7059ZM8.68235 1.48235L16.5176 4.23529L14.6118 5.29412L6.77647 2.32941L8.68235 1.48235ZM4.87059 2.96471L12.9176 6.14118L10.8 7.41176L2.32941 4.02353L4.87059 2.96471ZM1.27059 11.8588L10.3765 16.3059V7.83529L1.27059 4.23529V11.8588ZM4.23529 10.8L4.87059 11.0118V9.10588L5.50588 9.31765L4.44706 7.2L3.38824 8.68235L4.23529 8.89412V10.8ZM6.98824 11.8588L7.62353 12.2824V10.1647L8.25882 10.3765L7.2 8.25882L6.35294 9.52941L6.98824 9.74118V11.8588Z'
        />
    </svg>
)
