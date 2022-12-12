import { Collapse as MuiCollapse } from '@material-ui/core'
import React from 'react'
import { DefaultProps } from './types'

interface CollapseProps extends DefaultProps {
    collapsedHeight?: string
    in: boolean
    timeout?: number | { enter?: number; exit?: number } | 'auto'
    children?: React.ReactNode
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
