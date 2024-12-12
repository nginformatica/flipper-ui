import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { neutral } = theme.colors

export const IconSupplier = ({
    isTransparent,
    width,
    height,
    viewBox
}: IIconProps) => {
    const fill = isTransparent ? 'transparent' : neutral[200]

    return (
        <svg
            fill='none'
            width={width || 24}
            height={height || 24}
            viewBox={viewBox || '0 0 24 24'}
            xmlns='http://www.w3.org/2000/svg'>
            <path fill={fill} d='M10.437 0H3.48v1.5h6.958V0z' />
            <path
                fill={fill}
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.25 1.24H0V18h5.926v-2.893h2.441V18h5.883V1.24zm-1.438 2.894h-1.046v2.029h1.046v-2.03zm-5.535 0h1.046v2.029H7.277v-2.03zm-3.442 0H2.789v2.029h1.046v-2.03zm6.623 0h1.047v2.029h-1.047v-2.03zm-3.442 0H5.97v2.029h1.046v-2.03zm-5.535 0h1.047v2.029H1.48v-2.03zm11.244 4.434h-1.046v2.03h1.046v-2.03zm-5.535 0h1.046v2.03H7.19v-2.03zm-3.443 0H2.702v2.03h1.045v-2.03zm6.625 0h1.045v2.03h-1.045v-2.03zm-3.444 0H5.883v2.03h1.045v-2.03zm-4.488 0H1.395v2.03H2.44v-2.03zm9.282 4.322h1.047v2.029h-1.047v-2.03zm-7.931 0H2.745v2.029h1.046v-2.03zm5.23 1.39v.639H5.36v-.64h3.66zm2.44-1.39h-1.046v2.029h1.046v-2.03zm-10.023 0h1.046v2.029H1.438v-2.03z'
            />
        </svg>
    )
}
