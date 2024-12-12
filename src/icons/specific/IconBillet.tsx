import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { gray, primary } = theme.colors

export const IconBillet = ({ color, selected, width, height }: IIconProps) => {
    const fill = selected ? primary.main : color || gray[400]

    return (
        <svg
            width={width || 92}
            height={height || 92}
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
                fill={fill}
                d='M8 14H16V16H8V14ZM8 10H16V12H8V10ZM14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z'
            />
            <path d='M8 17H9V19H8V17Z' fill={fill} />
            <path d='M15 17H16V19H15V17Z' fill={fill} />
            <line x1='11.5' y1='17' x2='11.5' y2='19' stroke={fill} />
            <line
                x1='14.25'
                y1='17'
                x2='14.25'
                y2='19'
                stroke={fill}
                strokeWidth='0.5'
            />
            <line
                x1='10.25'
                y1='17'
                x2='10.25'
                y2='19'
                stroke={fill}
                strokeWidth='0.5'
            />
            <line
                x1='13.25'
                y1='17'
                x2='13.25'
                y2='19'
                stroke={fill}
                strokeWidth='0.5'
            />
        </svg>
    )
}
