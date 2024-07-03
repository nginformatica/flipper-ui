import React from 'react'
import type { ReactNode } from 'react'
import MuiCollapse from '@mui/material/Collapse'
import type { DefaultProps } from '../../types'

export interface CollapseProps extends DefaultProps {
    in: boolean
    children?: ReactNode
    collapsedHeight?: string
    timeout?: number | { enter?: number; exit?: number } | 'auto'
}

const Collapse = ({
    children,
    padding,
    margin,
    style = {},
    ...otherProps
}: CollapseProps) => (
    <MuiCollapse style={{ padding, margin, ...style }} {...otherProps}>
        <div>{children}</div>
    </MuiCollapse>
)

export default Collapse
