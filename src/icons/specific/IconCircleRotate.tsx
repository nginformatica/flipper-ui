import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { brown, orange } = theme.colors

export const IconCircleRotate = ({ width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 25}
        height={height || 24}
        viewBox={viewBox || '0 0 25 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fill={orange[600]}
            d='M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z'
        />
        <path
            fill={brown[600]}
            d='M12.0497 12.0588L8.77486 16.4706L5.5 12.0588H7.13742C7.13742 5.44117 13.2778 5 13.2778 5C12.3226 5.7353 10.4123 8.17647 10.4123 12.0588H12.0497Z'
        />
        <path
            fill={brown[600]}
            d='M12.9503 10.9412L16.2252 6.52941L19.5 10.9412H17.8625C17.8625 17.5588 11.7222 18 11.7222 18C12.6774 17.2647 14.5877 14.8236 14.5877 10.9412H12.9503Z'
        />
    </svg>
)
