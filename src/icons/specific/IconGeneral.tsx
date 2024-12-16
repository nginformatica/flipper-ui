import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconGeneral = ({ width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '0 0 24 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fill={primary.main}
            d='M3.84679 4.91803C2.82683 4.91803 2 5.90888 2 7.13115V18.7869C2 20.0092 2.82683 21 3.84679 21H17.1436C17.8824 21 18.6826 20.7049 19.052 19.8934L21.6375 15.0246C22.3762 13.623 21.9453 11.5574 20.7141 11.5574H7.54036C6.83167 11.5574 6.21622 11.8882 5.90658 12.5902L3.72367 17.0164V7.27869C3.72367 7.03423 3.88903 6.83607 4.09302 6.83607H6.58618V4.91803H3.84679Z'
        />
        <path
            fill={primary.main}
            d='M8.77155 4.91803V10.5246H21.3297V4.91803H19.7291H8.77155Z'
        />
        <path
            fill={primary.main}
            d='M7.171 10.5246V3H19.7291V3.88525H7.90971V10.5246H7.171Z'
        />
    </svg>
)
