import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { amber, neutral } = theme.colors

export const IconAET = ({ width, height, viewBox }: IIconProps) => (
    <svg
        width={width || 64}
        height={height || 82}
        viewBox={viewBox || '0 0 64 82'}>
        <path
            fill={amber[900]}
            d='M40 0H8C3.6 0 0.0399997 3.69 0.0399997 8.2L0 73.8C0 78.31 3.56 82 7.96 82H56C60.4 82 64 78.31 64 73.8V24.6L40 0ZM36 28.7V6.15L58 28.7H36Z'
        />
        <path
            fill={neutral[50]}
            d='M24.5234 55.6562H20.4141L19.6328 58H17.1406L21.375 46.625H23.5469L27.8047 58H25.3125L24.5234 55.6562ZM21.0469 53.7578H23.8906L22.4609 49.5L21.0469 53.7578ZM35.7109 53.0703H31.2109V56.1172H36.4922V58H28.8672V46.625H36.4766V48.5234H31.2109V51.2344H35.7109V53.0703ZM46.5859 48.5234H43.1016V58H40.7578V48.5234H37.3203V46.625H46.5859V48.5234Z'
        />
    </svg>
)
