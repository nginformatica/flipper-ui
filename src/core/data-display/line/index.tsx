import React from 'react'
import type { DefaultProps } from '@/core/types'
import { theme } from '@/theme'

const { grays, secondary } = theme.colors

export interface LineProps extends DefaultProps {
    primary?: boolean
    'data-testid'?: string
}

const Line = ({
    padding,
    margin,
    style,
    primary,
    ...otherProps
}: LineProps) => (
    <div
        style={{
            flex: 1,
            padding,
            margin,
            border: `1px solid ${primary ? secondary.light : grays.g6}`,
            ...style
        }}
        {...otherProps}
    />
)

export default Line
