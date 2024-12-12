import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { lightBlue } = theme.colors

export const IconWindows = ({ width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 30}
        height={height || 35}
        viewBox={viewBox || '0 0 30 35'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fill={lightBlue[400]}
            d='M0 6.27452L12.2946 4.58032V16.4598H0V6.27452ZM0 28.0111L12.2946 29.7053V17.9732H0V28.0111ZM13.6473 29.8861L30 32.1428V17.9732H13.6473V29.8861ZM13.6473 4.39952V16.4598H30V2.14282L13.6473 4.39952Z'
        />
    </svg>
)
