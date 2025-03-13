import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { neutral, primary } = theme.colors

export const IconMandates = ({ color, width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '0 0 24 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fill={color || primary.main}
            d='M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM3.39544 12C3.39544 16.7521 7.24783 20.6046 12 20.6046C16.7521 20.6046 20.6046 16.7521 20.6046 12C20.6046 7.24783 16.7521 3.39544 12 3.39544C7.24783 3.39544 3.39544 7.24783 3.39544 12Z'
        />
        <path
            fill={color || primary.main}
            d='M18.2819 10.953V13.047C18.2819 13.4917 17.9213 13.8523 17.4766 13.8523H13.7718V17.5571C13.7718 18.0018 13.4112 18.3624 12.9665 18.3624H10.953C10.5083 18.3624 10.1477 18.0018 10.1477 17.5571V13.8523H6.36241C5.91762 13.8523 5.55704 13.4917 5.55704 13.047V10.953C5.55704 10.5083 5.91762 10.1477 6.36241 10.1477H10.1477V6.44296C10.1477 5.99816 10.5083 5.63759 10.953 5.63759H12.9665C13.4112 5.63759 13.7718 5.99816 13.7718 6.44296L13.8121 10.1477H17.4766C17.9213 10.1477 18.2819 10.5083 18.2819 10.953Z'
        />
        <defs>
            <clipPath id='clip0_319_7148'>
                <rect width='24' height='24' fill={neutral[50]} />
            </clipPath>
        </defs>
    </svg>
)
