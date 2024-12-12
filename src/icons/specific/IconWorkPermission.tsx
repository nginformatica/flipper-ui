import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconWorkPermission = ({
    color,
    width,
    height,
    viewBox
}: IIconProps) => (
    <svg
        fill='none'
        width={width || 24}
        height={height || 24}
        viewBox={viewBox || '0 0 24 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            fill={color || primary.main}
            d='M21.007 11.8227C21.007 12.2291 20.9824 12.6108 20.9331 12.9803L23.4085 14.9261C23.6425 15.0985 23.7041 15.4064 23.5563 15.6773L21.1917 19.766C21.044 20.0369 20.7361 20.1355 20.4651 20.0369L17.5218 18.8547C16.9183 19.3227 16.2533 19.7167 15.5267 20.0123L15.0834 23.1404C15.0464 23.436 14.8001 23.6453 14.5045 23.6453H9.77548C9.47992 23.6453 9.24593 23.436 9.18435 23.1404L8.741 20.0123C8.0144 19.7167 7.36169 19.3227 6.74593 18.8547L3.80258 20.0369C3.53164 20.1232 3.22376 20.0369 3.07598 19.766L0.711444 15.6773C0.575976 15.431 0.637552 15.0985 0.859227 14.9261L3.35923 12.9803C3.29765 12.6108 3.27302 12.2044 3.27302 11.8227C3.27302 11.4409 3.32228 11.0345 3.38386 10.665L0.883857 8.71921C0.637552 8.5468 0.588291 8.2266 0.736074 7.96798L3.08829 3.87931C3.23607 3.60837 3.54396 3.50985 3.81489 3.60837L6.75824 4.79064C7.36169 4.33497 8.02671 3.92857 8.75331 3.633L9.19666 0.504926C9.24592 0.209359 9.47992 0 9.77548 0H14.5045C14.8001 0 15.0464 0.209359 15.0957 0.504926L15.539 3.633C16.2656 3.92857 16.9183 4.32266 17.5341 4.79064L20.4775 3.60837C20.7484 3.52217 21.0563 3.60837 21.2041 3.87931L23.5686 7.96798C23.7041 8.21428 23.6425 8.5468 23.4208 8.71921L20.9208 10.665C20.9824 11.0345 21.007 11.4286 21.007 11.8227ZM12.3395 18.4729C16.0803 18.4729 19.1129 15.4403 19.1129 11.6995C19.1129 7.95861 16.0803 4.92606 12.3395 4.92606C8.59862 4.92606 5.56607 7.95861 5.56607 11.6995C5.56607 15.4403 8.59862 18.4729 12.3395 18.4729Z'
        />
    </svg>
)
