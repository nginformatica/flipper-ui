import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { neutral, primary } = theme.colors

export const IconMedicalRecords = ({
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
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            fill={color || primary.main}
            d='M4.84846 0H19.3143C20.5143 5.15855e-05 21.7143 0.600051 21.7252 2.4C21.7361 4.19996 21.7252 21.6 21.7252 21.6C21.7252 22.92 20.6403 24 19.3143 24H4.8364C3.51038 24 2.4375 22.92 2.4375 21.6L2.44956 2.4C2.44956 1.08 3.52243 0 4.84846 0ZM7.25942 19.2H16.9032V16.8H7.25942V19.2ZM7.25942 14.4H16.9032V12H7.25942V14.4ZM15.7143 6.59246V5.40765C15.7143 5.15597 15.5103 4.95195 15.2586 4.95195H13.1851L13.1624 2.85575C13.1624 2.60408 12.9583 2.40005 12.7067 2.40005H11.5674C11.3158 2.40005 11.1117 2.60408 11.1117 2.85575V4.95195H8.96996C8.71829 4.95195 8.51426 5.15597 8.51426 5.40765V6.59246C8.51426 6.84414 8.71829 7.04816 8.96996 7.04816H11.1117V9.14436C11.1117 9.39603 11.3158 9.60006 11.5674 9.60006H12.7067C12.9583 9.60006 13.1624 9.39603 13.1624 9.14436V7.04816H15.2586C15.5103 7.04816 15.7143 6.84414 15.7143 6.59246Z'
        />
        <defs>
            <clipPath id='clip0_319_7166'>
                <rect width='24' height='24' fill={neutral[50]} />
            </clipPath>
        </defs>
    </svg>
)
