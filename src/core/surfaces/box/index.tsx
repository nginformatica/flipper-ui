import React from 'react'
import type { ReactNode } from 'react'
import type { DefaultProps } from '@/core/types'
import Paper from '@/core/surfaces/paper'

export interface BoxProps extends DefaultProps {
    minHeight?: number
    children: ReactNode
    'data-testid'?: string
}

const Box = ({
    children,
    style = {},
    margin,
    padding = 18,
    minHeight = 400,
    ...otherProps
}: BoxProps) => (
    <Paper
        margin={margin}
        padding={padding}
        style={{ minHeight, ...style }}
        {...otherProps}>
        {children}
    </Paper>
)

export default Box
