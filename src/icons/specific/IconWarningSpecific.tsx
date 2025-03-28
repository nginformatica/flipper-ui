import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { amber } = theme.colors

export const IconWarningSpecific = ({
    color,
    width,
    height,
    viewBox
}: IIconProps) => (
    <svg
        fill='none'
        width={width || 51}
        height={height || 48}
        viewBox={viewBox || '0 0 51 48'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            fill={color || amber[500]}
            d='M28.6305 2.81722C28.3149 2.24867 27.86 1.7763 27.3115 1.44782C26.763 1.11933 26.1405 0.94635 25.5067 0.94635C24.8729 0.94635 24.2504 1.11933 23.7019 1.44782C23.1535 1.7763 22.6985 2.24867 22.383 2.81722L0.526269 41.2854C-0.930419 43.8506 0.816331 47.1115 3.65002 47.1115H47.3602C50.1939 47.1115 51.9438 43.8473 50.484 41.2854L28.6305 2.81722ZM25.5003 14.1397C25.0975 14.14 24.6991 14.2275 24.3309 14.3967C23.9627 14.5659 23.6329 14.8129 23.3626 15.122C23.0924 15.4311 22.8877 15.7953 22.7618 16.1911C22.6359 16.587 22.5915 17.0058 22.6316 17.4204L23.7472 28.9836C23.7847 29.4379 23.9856 29.861 24.3103 30.1694C24.6349 30.4778 25.0596 30.6489 25.5003 30.6489C25.9411 30.6489 26.3658 30.4778 26.6904 30.1694C27.015 29.861 27.216 29.4379 27.2535 28.9836L28.3691 17.4204C28.4091 17.0058 28.3648 16.587 28.2389 16.1911C28.113 15.7953 27.9083 15.4311 27.638 15.122C27.3678 14.8129 27.0379 14.5659 26.6698 14.3967C26.3016 14.2275 25.9032 14.14 25.5003 14.1397ZM25.5067 33.9228C24.6613 33.9228 23.8506 34.2702 23.2528 34.8885C22.655 35.5069 22.3192 36.3455 22.3192 37.22C22.3192 38.0944 22.655 38.9331 23.2528 39.5514C23.8506 40.1698 24.6613 40.5172 25.5067 40.5172C26.3521 40.5172 27.1628 40.1698 27.7606 39.5514C28.3584 38.9331 28.6942 38.0944 28.6942 37.22C28.6942 36.3455 28.3584 35.5069 27.7606 34.8885C27.1628 34.2702 26.3521 33.9228 25.5067 33.9228Z'
        />
    </svg>
)
