import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconTechnician = ({
    color,
    width,
    height,
    viewBox
}: IIconProps) => (
    <svg
        fill='none'
        width={width || 25}
        height={height || 24}
        viewBox={viewBox || '0 0 25 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fill={color || primary.main}
            d='M6.90636 14.9844L12.0212 20.9431L17.318 15.0025C21.0951 15.4605 24.0312 18.6859 24.0312 22.5845V23.2871H0.03125V22.5845C0.03125 18.6303 3.0516 15.3685 6.90636 14.9844ZM4.5 20.9995H5.59733V21.9995H6.92969V20.9995H8V19.9995H6.92969V18.9995H5.59733V19.9995H4.5V20.9995Z'
        />
        <path
            fill={color || primary.main}
            d='M15.4541 14.9473L12.0097 18.8102L8.69388 14.9473H15.4541Z'
        />
        <path
            fill={color || primary.main}
            d='M11.9997 0.712891C15.5663 0.712891 18.4678 3.61445 18.4678 7.18089C18.4678 10.7474 15.5663 13.6489 11.9997 13.6489C8.43324 13.6489 5.53168 10.7474 5.53168 7.18089C5.53168 3.61445 8.4332 0.712891 11.9997 0.712891Z'
        />
    </svg>
)
