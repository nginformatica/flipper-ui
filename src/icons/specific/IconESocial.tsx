import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconESocial = ({ width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 43}
        height={height || 50}
        viewBox={viewBox || '0 0 43 50'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            stroke={primary.main}
            strokeWidth='4'
            d='M19.4063 22C20.5661 22 21.5063 21.0598 21.5063 19.9V2H37.4051C39.0619 2 40.4051 3.34315 40.4051 5V45C40.4051 46.6569 39.0619 48 37.4051 48H5C3.34315 48 2 46.6568 2 45V22H19.4063Z'
        />
        <path
            fill={primary.main}
            d='M4.92489 16.0129C6.31821 17.2245 8.13578 17.833 9.97775 17.7045C11.8197 17.576 13.5352 16.7211 14.7468 15.3278C15.9584 13.9345 16.5669 12.1169 16.4384 10.2749C16.3099 8.43295 15.455 6.71747 14.0617 5.50585L9.49328 10.7594L4.92489 16.0129'
        />
    </svg>
)
