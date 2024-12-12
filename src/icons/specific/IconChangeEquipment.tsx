import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { neutral } = theme.colors

export const IconChangeEquipment = ({
    color,
    width,
    height,
    viewBox
}: IIconProps) => (
    <svg
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '-2 0 35 25'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fill={color}
            d='M13.4737 0V3.57143H16.8421V5.35714H20.2105V3.57143H23.5789V0H13.4737ZM11.7895 7.14286L8.42105 12.5H5.05263V19.6429H8.42105L11.7895 25H23.5789L26.9474 19.6429V7.14286H11.7895ZM28.6316 7.14286V19.6429H32V7.14286H28.6316ZM20.2105 9.82143L18.6842 14.2857H21.2105L15.1579 20.7031L17 16.0714H14.6316L20.2105 9.82143ZM0 10.7143V21.4286H3.36842V10.7143H0Z'
        />
        <g filter='url(#filter0_d_1633_9103)'>
            <circle cx='21.5' cy='18.5' r='6.5' fill={neutral[50]} />
        </g>
        <path
            fill={color}
            d='M21.5 26C17.3578 26 14 22.6423 14 18.5C14 14.3578 17.3578 11 21.5 11C25.6423 11 29 14.3578 29 18.5C29 22.6423 25.6423 26 21.5 26ZM21.5 24.5C23.0913 24.5 24.6174 23.8679 25.7426 22.7426C26.8679 21.6174 27.5 20.0913 27.5 18.5C27.5 16.9087 26.8679 15.3826 25.7426 14.2574C24.6174 13.1321 23.0913 12.5 21.5 12.5C19.9087 12.5 18.3826 13.1321 17.2574 14.2574C16.1321 15.3826 15.5 16.9087 15.5 18.5C15.5 20.0913 16.1321 21.6174 17.2574 22.7426C18.3826 23.8679 19.9087 24.5 21.5 24.5ZM17.75 19.25H24.5V20.75H21.5V23L17.75 19.25ZM21.5 16.25V14L25.25 17.75H18.5V16.25H21.5Z'
        />
        <defs>
            <filter
                id='filter0_d_1633_9103'
                x='14'
                y='12'
                width='15'
                height='15'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'>
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                />
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                />
                <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_1633_9103'
                />
                <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_1633_9103'
                    result='shape'
                />
            </filter>
        </defs>
    </svg>
)
