import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconHeight = ({ width, height, viewBox }: IIconProps) => (
    <svg
        width={width || 16}
        height={height || 30}
        viewBox={viewBox || '0 0 16 30'}
        style={{ margin: '0px auto' }}>
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            fill={primary.main}
            d='M9.55588 2.44477H2.44477V25.5559H9.55588V2.44477ZM0.666992 0.666992V27.3337H11.3337V0.666992H0.666992Z'
        />
        <path
            fill={primary.main}
            d='M1.55588 3.33366H5.11144V4.22255H1.55588V3.33366Z'
        />
        <path
            fill={primary.main}
            d='M1.55588 5.11144H7.7781V6.88921H1.55588V5.11144Z'
        />
        <path
            fill={primary.main}
            d='M1.55588 7.7781H5.11144V9.55588H1.55588V7.7781Z'
        />
        <path
            fill={primary.main}
            d='M1.55588 10.4448H5.11144V12.2225H1.55588V10.4448Z'
        />
        <path
            fill={primary.main}
            d='M2.44477 13.1114H6.00033V14.8892H2.44477V13.1114Z'
        />
        <path
            fill={primary.main}
            d='M1.55588 15.7781H7.7781V17.5559H1.55588V15.7781Z'
        />
        <path
            fill={primary.main}
            d='M1.55588 18.4448H5.11144V20.2225H1.55588V18.4448Z'
        />
        <path
            fill={primary.main}
            d='M1.55588 21.1114H6.00033V22.8892H1.55588V21.1114Z'
        />
        <path
            fill={primary.main}
            d='M2.44477 23.7781H6.00033V24.667H2.44477V23.7781Z'
        />
    </svg>
)
