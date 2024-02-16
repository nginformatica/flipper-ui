import React from 'react'
import type { ReactNode } from 'react'
import { Collapse as MuiCollapse } from '@material-ui/core'
import type { DefaultProps } from '../../types'

export interface CollapseProps extends DefaultProps {
    collapsedHeight?: string
    in: boolean
    timeout?: number | { enter?: number; exit?: number } | 'auto'
    children?: ReactNode
}

const Collapse = ({
    children,
    padding,
    margin,
    style = {},
    ...otherProps
}: CollapseProps) => (
    <MuiCollapse style={{ padding, margin, ...style }} {...otherProps}>
        {children}
    </MuiCollapse>
)

export default Collapse
