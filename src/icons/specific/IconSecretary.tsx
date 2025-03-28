import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconSecretary = ({
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
            d='M2.71338 12H22.7134V13.8887H2.71338V12Z'
        />
        <path
            fill={color || primary.main}
            d='M3.26294 15.0679V23.6243H22.1627V15.0679H3.26294ZM10.9054 18.202H12.1038V17.0036H13.2826V18.202H14.481V19.3808H13.2826V20.5792H12.1038V19.3808H10.9054V18.202Z'
        />
        <path
            fill={color || primary.main}
            d='M10.151 7.39551L12.7083 10.3749L15.3569 7.40456C17.2453 7.63356 18.7134 9.24625 18.7134 11.1956V11.5469H6.71338V11.1956C6.71338 9.21847 8.22356 7.58755 10.151 7.39551Z'
        />
        <path
            fill={color || primary.main}
            d='M14.4253 7.37646L12.7031 9.30794L11.0452 7.37646H14.4253Z'
        />
        <path
            fill={color || primary.main}
            d='M12.6981 0.259766C14.4815 0.259766 15.9322 1.71055 15.9322 3.49378C15.9322 5.27704 14.4815 6.72779 12.6981 6.72779C10.9148 6.72779 9.46411 5.27702 9.46411 3.49378C9.46411 1.71055 10.9148 0.259766 12.6981 0.259766Z'
        />
    </svg>
)
