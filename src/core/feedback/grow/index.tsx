import React from 'react'
import type { ReactElement } from 'react'
import MuiGrow from '@mui/material/Grow'
import type { DefaultProps } from '@/core/types'

export interface GrowProps extends DefaultProps {
    in: boolean
    timeout?: number | { enter?: number; exit?: number } | 'auto'
    children: ReactElement<Record<string, unknown>>
}

const Grow = ({
    children,
    padding,
    margin,
    style = {},
    ...otherProps
}: GrowProps) => (
    <MuiGrow style={{ padding, margin, ...style }} {...otherProps}>
        {children}
    </MuiGrow>
)

export default Grow
