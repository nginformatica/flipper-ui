import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { neutral, primary } = theme.colors

export const IconScheduleDashboardHour = ({
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
        <g clip-path='url(#clip0_463_281)'>
            <path
                fill={color || primary.main}
                d='M17.4886 2.18182H18.5795C19.7795 2.18182 20.7614 3.16364 20.7614 4.36364V12.8011L18.5795 12V7.63636H3.30682V19.6364H10.9432L12.0341 21.8182H3.30682C2.09591 21.8182 1.125 20.8364 1.125 19.6364L1.13591 4.36364C1.13591 3.16364 2.09591 2.18182 3.30682 2.18182H4.39773V0H6.57955V2.18182H15.3068V0H17.4886V2.18182Z'
            />
            <path
                fill={color || primary.main}
                d='M10.9432 9.81818H5.48864V15.2727H10.9432V9.81818Z'
            />
            <path
                fill={color || primary.main}
                d='M16.9432 15.8204H17.7614V18.684L20.2159 20.1404L19.8068 20.8113L16.9432 19.0931V15.8204Z'
            />
            <path
                fill={color || primary.main}
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M17.4832 13.0909C14.4723 13.0909 12.0341 15.5345 12.0341 18.5455C12.0341 21.5564 14.4723 24 17.4832 24C20.4995 24 22.9432 21.5564 22.9432 18.5455C22.9432 15.5345 20.4995 13.0909 17.4832 13.0909ZM17.4832 22.3636C15.3068 22.3636 13.6705 20.8113 13.6705 18.5455C13.6705 16.3636 15.3301 14.7273 17.4832 14.7273C19.6364 14.7273 21.3068 16.2796 21.3068 18.5455C21.3068 20.8113 19.6595 22.3636 17.4832 22.3636Z'
            />
        </g>
        <defs>
            <clipPath id='clip0_463_281'>
                <rect width='24' height='24' fill={neutral[50]} />
            </clipPath>
        </defs>
    </svg>
)
