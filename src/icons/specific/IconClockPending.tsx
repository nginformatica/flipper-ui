import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { lightBlue } = theme.colors

export const IconClockPending = ({ width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || '24'}
        height={height || '24'}
        viewBox={viewBox || '0 0 24 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fill={lightBlue[600]}
            d='M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z'
        />
        <path
            fill={lightBlue[900]}
            d='M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
        />
        <circle cx='12' cy='12' r='7' fill={lightBlue[600]} />
        <path
            fill={lightBlue[900]}
            d='M14 7.5V12.5C14 13.3284 13.3284 14 12.5 14H7.5C6.67157 14 6 13.3284 6 12.5C6 11.6716 6.67157 11 7.5 11H11V7.5C11 6.67157 11.6716 6 12.5 6C13.3284 6 14 6.67157 14 7.5Z'
        />
    </svg>
)
