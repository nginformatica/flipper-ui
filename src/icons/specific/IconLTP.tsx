import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { gray, neutral } = theme.colors

export const IconLTP = ({ width, height, viewBox }: IIconProps) => (
    <svg
        width={width || 64}
        height={height || 82}
        viewBox={viewBox || '0 0 64 82'}>
        <path
            fill={gray[500]}
            d='M40 0H8C3.6 0 0.0399997 3.69 0.0399997 8.2L0 73.8C0 78.31 3.56 82 7.96 82H56C60.4 82 64 78.31 64 73.8V24.6L40 0ZM36 28.7V6.15L58 28.7H36Z'
        />
        <path
            fill={neutral[50]}
            d='M21.7109 56.1172H26.6875V58H19.3672V46.625H21.7109V56.1172ZM34.9922 48.5234H31.5078V58H29.1641V48.5234H25.7266V46.625H34.9922V48.5234ZM38.6797 53.9922V58H36.3359V46.625H40.7734C41.6276 46.625 42.3776 46.7812 43.0234 47.0938C43.6745 47.4062 44.1745 47.8516 44.5234 48.4297C44.8724 49.0026 45.0469 49.6562 45.0469 50.3906C45.0469 51.5052 44.6641 52.3854 43.8984 53.0312C43.138 53.6719 42.0833 53.9922 40.7344 53.9922H38.6797ZM38.6797 52.0938H40.7734C41.3932 52.0938 41.8646 51.9479 42.1875 51.6562C42.5156 51.3646 42.6797 50.9479 42.6797 50.4062C42.6797 49.849 42.5156 49.3984 42.1875 49.0547C41.8594 48.7109 41.4062 48.5339 40.8281 48.5234H38.6797V52.0938Z'
        />
    </svg>
)
