import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { lightGreen } = theme.colors

export const IconMandatesPartly = ({
    color,
    width,
    height,
    opacity,
    viewBox
}: IIconProps) => (
    <svg
        fill='none'
        width={width || '49'}
        height={height || '99'}
        viewBox={viewBox || '0 0 49 99'}>
        <g opacity={opacity || '0.5'}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                fill={color || lightGreen[400]}
                d='M0 99C27.062 99 49 76.8381 49 49.5C49 22.1619 27.062 0 0 0V14.0062C19.4047 14.0062 35.1353 29.8973 35.1353 49.5C35.1353 69.1027 19.4047 84.9938 0 84.9938V99Z'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                fill={color || lightGreen[400]}
                d='M25.651 53.8188V45.1812C25.651 43.3464 24.1787 41.8591 22.3624 41.8591H7.39933L7.2349 26.5772C7.2349 24.7424 5.76254 23.255 3.94631 23.255H0V75.745H3.94631C5.76254 75.745 7.2349 74.2576 7.2349 72.4228V57.1409H22.3624C24.1787 57.1409 25.651 55.6536 25.651 53.8188Z'
            />
        </g>
    </svg>
)
