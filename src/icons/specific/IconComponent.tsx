import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconComponent = ({
    isTransparent,
    color,
    width,
    height,
    viewBox
}: IIconProps) => {
    return (
        <svg
            fill='none'
            width={width || 24}
            height={height || 24}
            viewBox={viewBox || '0 0 24 24'}
            xmlns='http://www.w3.org/2000/svg'>
            <path
                stroke={isTransparent ? 'transparent' : color || primary.main}
                d='M9.42105 2.5V4.64286H11.5263V5.71429H13.6316V4.64286H15.7368V2.5H9.42105ZM8.36842 6.78571L6.26316 10H4.15789V14.2857H6.26316L8.36842 17.5H15.7368L17.8421 14.2857V6.78571H8.36842ZM18.8947 6.78571V14.2857H21V6.78571H18.8947ZM13.6316 8.39286L12.6776 11.0714H14.2566L10.4737 14.9219L11.625 12.1429H10.1447L13.6316 8.39286ZM1 8.92857V15.3571H3.10526V8.92857H1Z'
            />
        </svg>
    )
}
