import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconFemale = ({ width, height }: IIconProps) => (
    <svg
        width={width || 28}
        height={height || 35}
        style={{ margin: '0px auto' }}>
        <path
            fill={primary.main}
            d='M3.94664 20.8951C-0.672318 16.2761 -0.672318 8.78728 3.94664 4.16832C8.5656 -0.450639 16.0544 -0.450638 20.6734 4.16832C25.2923 8.78728 25.2923 16.2761 20.6734 20.8951C18.7083 22.8601 16.562 23.9892 14 24.2822V33C14 33 12.0417 33 11 33V24.2822C8.438 23.9892 5.91174 22.8601 3.94664 20.8951ZM6.33617 6.55785C3.03692 9.85711 3.03692 15.2063 6.33617 18.5055C9.63543 21.8048 14.9846 21.8048 18.2838 18.5055C21.5831 15.2063 21.5831 9.85711 18.2838 6.55785C14.9846 3.2586 9.63543 3.2586 6.33617 6.55785Z'
        />
        <path
            fill={primary.main}
            d='M7.99959 27.0003H16.9996V30.0003H7.99959V27.0003Z'
        />
    </svg>
)
