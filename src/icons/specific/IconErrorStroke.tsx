import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { action } = theme.colors

export const IconErrorStroke = ({ width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '0 0 24 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fill={action.cancel}
            stroke={action.cancel}
            d='M20.9372 7.29756L21.2908 6.944L20.9372 6.59045L19.4097 5.06295L19.0562 4.7094L18.7026 5.06295L13.0003 10.7652L7.29805 5.06295L6.94449 4.7094L6.59094 5.06295L5.06344 6.59045L4.70989 6.944L5.06344 7.29756L10.7657 12.9998L5.06344 18.7021L4.70989 19.0557L5.06344 19.4092L6.59094 20.9367L6.94449 21.2903L7.29805 20.9367L13.0003 15.2344L18.7026 20.9367L19.0562 21.2903L19.4097 20.9367L20.9372 19.4092L21.2908 19.0557L20.9372 18.7021L15.2349 12.9998L20.9372 7.29756Z'
        />
    </svg>
)
