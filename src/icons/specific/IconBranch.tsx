import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconBranch = ({
    color,
    isTransparent,
    width,
    height,
    viewBox
}: IIconProps) => {
    const handleColor = () => {
        if (color) {
            return color
        }

        if (isTransparent) {
            return 'transparent'
        }

        return primary.main
    }

    return (
        <svg
            width={width || 24}
            height={height || 24}
            viewBox={viewBox || '0 0 24 24'}
            xmlns='http://www.w3.org/2000/svg'>
            <path
                fill={handleColor()}
                fillRule='evenodd'
                clipRule='evenodd'
                d='M21 21V5C21 4.44772 20.5523 4 20 4H17V3C17 2.44772 16.5523 2 16 2H8C7.44772 2 7 2.44772 7 3V4H4C3.44772 4 3 4.44772 3 5V21C3 21.5523 3.44772 22 4 22H20C20.5523 22 21 21.5523 21 21ZM7 6H5V10H7V6ZM8 6H10V10H8V6ZM13 6H11V10H13V6ZM14 6H16V10H14V6ZM19 6H17V10H19V6ZM17 11H19V15H17V11ZM16 11H14V15H16V11ZM11 11H13V15H11V11ZM10 11H8V15H10V11ZM5 11H7V15H5V11ZM7 16H5V20H7V16ZM9 16H15V20H9V16ZM19 16H17V20H19V16Z'
            />
        </svg>
    )
}
