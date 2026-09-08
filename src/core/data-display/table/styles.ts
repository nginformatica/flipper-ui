import type { CSSProperties } from 'react'
import { alpha } from '@mui/material/styles'
import { theme } from '@/theme'

const { gray } = theme.colors

const DEFAULT_RADIUS = 12
const DEFAULT_MAX_WIDTH = 150

export type Truncate = boolean | number | string

// sx reads a bare number as a theme multiple, so pin the unit
const toPx = (value: number | string) =>
    typeof value === 'number' ? `${value}px` : value

export const SCROLLBAR = {
    scrollbarWidth: 'thin',
    scrollbarColor: `${alpha(gray[900], 0.2)} transparent`,

    '&::-webkit-scrollbar': {
        width: '4px',
        height: '4px'
    },

    '&::-webkit-scrollbar-track': {
        background: 'transparent'
    },

    '&::-webkit-scrollbar-thumb': {
        borderRadius: '2px',
        backgroundColor: alpha(gray[900], 0.2)
    },

    '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: alpha(gray[900], 0.35)
    }
} as const

export const tableFrame = (
    framed?: boolean,
    borderRadius?: number | string
) => {
    if (!framed) {
        return borderRadius === undefined
            ? undefined
            : { borderRadius: toPx(borderRadius) }
    }

    return {
        boxShadow: 'none',
        border: `1px solid ${gray[300]}`,
        borderRadius: toPx(borderRadius ?? DEFAULT_RADIUS),

        '& table': {
            border: 'none !important'
        },

        // a footer below the body means the frame no longer closes the last
        // row, so it only drops that border while the body really is last
        '& tbody:last-child tr:last-of-type td': {
            borderBottom: 'none'
        },

        // the frame draws the bottom edge, so the footer must not draw one too
        '& tfoot td': {
            borderBottom: 'none'
        }
    }
}

export const truncateStyle = (
    truncate?: Truncate
): CSSProperties | undefined => {
    if (!truncate) {
        return undefined
    }

    return {
        maxWidth: toPx(truncate === true ? DEFAULT_MAX_WIDTH : truncate),
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }
}
