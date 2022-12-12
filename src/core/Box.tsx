import React from 'react'
import type { DefaultProps } from './types'
import Paper from './Paper'

export interface BoxProps extends DefaultProps {
    minHeight?: number
    children: React.ReactNode
}

const Box = ({
    children,
    margin,
    padding = 18,
    style = {},
    minHeight = 400,
    ...otherProps
}: BoxProps) => (
    <Paper
        padding={padding}
        margin={margin}
        style={{ minHeight, ...style }}
        {...otherProps}>
        {children}
    </Paper>
)

export default Box
