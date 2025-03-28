import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconNurse = ({ color, width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '0 0 24 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M2 12H22V13.8887H2V12Z' fill={color || primary.main} />
        <path
            fill={color || primary.main}
            d='M2.5498 15.0679V23.6243H21.4495V15.0679H2.5498ZM10.1922 18.202H11.3906V17.0036H12.5694V18.202H13.7679V19.3808H12.5694V20.5792H11.3906V19.3808H10.1922V18.202Z'
        />
        <path
            fill={color || primary.main}
            d='M9.43759 7.39551L11.995 10.3749L14.6435 7.40456C16.5319 7.63356 18 9.24625 18 11.1956V11.5469H6V11.1956C6 9.21847 7.51018 7.58755 9.43759 7.39551Z'
        />
        <path
            fill={color || primary.main}
            d='M13.7122 7.37646L11.99 9.30794L10.332 7.37646H13.7122Z'
        />
        <path
            fill={color || primary.main}
            d='M11.9845 0.259766C13.7678 0.259766 15.2186 1.71055 15.2186 3.49378C15.2186 5.27704 13.7678 6.72779 11.9845 6.72779C10.2012 6.72779 8.75049 5.27702 8.75049 3.49378C8.75049 1.71055 10.2012 0.259766 11.9845 0.259766Z'
        />
    </svg>
)
