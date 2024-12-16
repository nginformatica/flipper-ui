import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconCalendarWeek = ({ width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '0 0 24 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <g clip-path='url(#clip0_463_234)'>
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                fill={primary.main}
                d='M21.8182 2.18182H19.6364V0H17.4545V2.18182H6.54545V0H4.36364V2.18182H2.18182C0.970909 2.18182 0.0109091 3.16364 0.0109091 4.36364L0 21.8182C0 23.0182 0.872727 24 2.18182 24H21.8182C22.5455 24 24 23.5636 24 21.8182V4.36364C24 3.16364 23.0182 2.18182 21.8182 2.18182ZM2.18182 7.63636V21.8182H21.8182V7.63636H2.18182Z'
            />
            <path
                fill={primary.main}
                d='M3.81818 13.0909H7.09091V16.3636H3.81818V13.0909Z'
            />
            <path
                fill={primary.main}
                d='M8.18182 13.0909H11.4545V16.3636H8.18182V13.0909Z'
            />
            <path
                fill={primary.main}
                d='M12.5455 13.0909H15.8182V16.3636H12.5455V13.0909Z'
            />
            <path
                fill={primary.main}
                d='M16.9091 13.0909H20.1818V16.3636H16.9091V13.0909Z'
            />
        </g>
        <defs>
            <clipPath id='clip0_463_234'>
                <rect width='24' height='24' fill='white' />
            </clipPath>
        </defs>
    </svg>
)
