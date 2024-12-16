import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { gray, primary } = theme.colors

export const IconFunil = ({ disabled, width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '0 0 18 14'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M14.936 0.427866C14.8152 0.15136 14.6062 0.0130885 14.308 0.0129395H0.691695C0.393876 0.0129395 0.184587 0.15136 0.0640141 0.427866C-0.0564846 0.718531 -0.00689161 0.966906 0.213017 1.17251L5.45762 6.41696V11.587C5.45762 11.7716 5.52502 11.9309 5.65971 12.0659L8.38286 14.789C8.51062 14.9236 8.67013 14.9912 8.86168 14.9912C8.94671 14.9912 9.03532 14.9734 9.12753 14.9379C9.40423 14.8173 9.54261 14.6081 9.54261 14.3103V6.41699L14.787 1.17254C15.007 0.966943 15.0565 0.718643 14.936 0.427866Z'
            fill={disabled ? gray[400] : primary.main}
        />
    </svg>
)
