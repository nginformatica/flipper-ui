import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { gray, primary } = theme.colors

export const IconDownloadQRCode = ({
    disabled,
    width,
    height,
    viewBox
}: IIconProps) => (
    <svg
        fill='none'
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '0 0 16 16'}
        xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_8_103)'>
            <path
                fill={!disabled ? primary.main : gray[400]}
                d='M2.66667 2.66667H6.66667V6.66667H2.66667V2.66667ZM13.3333 2.66667V6.66667H9.33333V2.66667H13.3333ZM2.66667 13.3333V9.33333H6.66667V13.3333H2.66667ZM4 4V5.33333H5.33333V4H4ZM10.6667 4V5.33333H12V4H10.6667ZM4 10.6667V12H5.33333V10.6667H4ZM2.66667 7.33333H4V8.66667H2.66667V7.33333ZM7.33333 4H8.66667V6.66667H7.33333V4ZM1.33333 1.33333V4H0V1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0L4 0V1.33333H1.33333ZM14.6667 0C15.0203 0 15.3594 0.140476 15.6095 0.390524C15.8595 0.640573 16 0.979711 16 1.33333V4H14.6667V1.33333H12V0H14.6667ZM1.33333 12V14.6667H4V16H1.33333C0.979711 16 0.640573 15.8595 0.390524 15.6095C0.140476 15.3594 0 15.0203 0 14.6667V12H1.33333Z'
            />
            <g clipPath='url(#clip1_8_103)'>
                <path
                    fill={!disabled ? primary.main : gray[400]}
                    d='M14.9667 10.9333H9.8334C9.22473 10.9333 8.7334 11.4246 8.7334 12.0333V14.2333H10.2001V15.7H14.6001V14.2333H16.0667V12.0333C16.0667 11.4246 15.5754 10.9333 14.9667 10.9333ZM13.8667 14.9666H10.9334V13.1333H13.8667V14.9666ZM14.9667 12.4C14.7651 12.4 14.6001 12.235 14.6001 12.0333C14.6001 11.8316 14.7651 11.6666 14.9667 11.6666C15.1684 11.6666 15.3334 11.8316 15.3334 12.0333C15.3334 12.235 15.1684 12.4 14.9667 12.4ZM14.6001 9.09998H10.2001V10.5666H14.6001V9.09998Z'
                />
            </g>
        </g>
        <defs>
            <clipPath id='clip0_8_103'>
                <rect width='16' height='16' fill='none' />
            </clipPath>
            <clipPath id='clip1_8_103'>
                <rect
                    fill='none'
                    width='8.8'
                    height='8.8'
                    transform='translate(8 8)'
                />
            </clipPath>
        </defs>
    </svg>
)