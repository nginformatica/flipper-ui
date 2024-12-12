import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { deepOrange, neutral } = theme.colors

export const IconWarehouse = ({ width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '0 0 24 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <mask
            id='mask0_153_2092'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='20'
            height='20'>
            <path d='M0 0H20V20H0V0Z' fill={neutral[50]} />
        </mask>
        <g mask='url(#mask0_153_2092)'>
            <path
                d='M19.3945 19.4141H0.605469V4.84625L9.98047 0.585938L19.3945 4.84625V19.4141Z'
                stroke={deepOrange[600]}
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M3.92578 19.4141V7.69531H16.0352V19.4141'
                stroke={deepOrange[600]}
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M3.92578 14.7266H8.61328V19.4141'
                stroke={deepOrange[600]}
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </g>
        <path
            d='M6.26953 14.7266V15.8984'
            stroke={deepOrange[600]}
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <mask
            id='mask1_153_2092'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='20'
            height='20'>
            <path d='M0 0H20V20H0V0Z' fill={neutral[50]} />
        </mask>
        <g mask='url(#mask1_153_2092)'>
            <path
                d='M11.3477 19.4141V14.7266H16.0352'
                stroke={deepOrange[600]}
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </g>
        <path
            d='M13.6914 14.7266V15.8984'
            stroke={deepOrange[600]}
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M3.92578 10.0391H8.61328V14.7266'
            stroke={deepOrange[600]}
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M6.26953 10.0391V11.2109'
            stroke={deepOrange[600]}
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M8.22266 4.57031H11.7383'
            stroke={deepOrange[600]}
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            fill={deepOrange[600]}
            d='M3.5 19H1V5L10 1L19 5V19H16.5V7.5H3.5V19Z'
        />
        <path d='M8 4H9H10H11.5' stroke={neutral[50]} />
        <mask
            id='mask2_153_2092'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='20'
            height='20'>
            <path d='M0 0H20V20H0V0Z' fill={neutral[50]} />
        </mask>
        <g mask='url(#mask2_153_2092)'>
            <path
                d='M19.3945 19.4141H0.605469V4.84625L9.98047 0.585938L19.3945 4.84625V19.4141Z'
                stroke={deepOrange[600]}
                strokeWidth='0.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M3.92578 19.4141V7.69531H16.0352V19.4141'
                stroke={deepOrange[600]}
                strokeWidth='0.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M3.92578 14.7266H8.61328V19.4141'
                stroke={deepOrange[600]}
                strokeWidth='0.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </g>
        <path
            d='M6.26953 14.7266V15.8984'
            stroke={deepOrange[600]}
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <mask
            id='mask3_153_2092'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='20'
            height='20'>
            <path d='M0 0H20V20H0V0Z' fill={neutral[50]} />
        </mask>
        <g mask='url(#mask3_153_2092)'>
            <path
                d='M11.3477 19.4141V14.7266H16.0352'
                stroke={deepOrange[600]}
                strokeWidth='0.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </g>
        <path
            d='M13.6914 14.7266V15.8984'
            stroke={deepOrange[600]}
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M3.92578 10.0391H8.61328V14.7266'
            stroke={deepOrange[600]}
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M6.26953 10.0391V11.2109'
            stroke={deepOrange[600]}
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M8.22266 4.57031H11.7383'
            stroke={deepOrange[600]}
            strokeWidth='0.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)
