import { Collapse as MuiCollapse } from '@material-ui/core'
import React, { FC } from 'react'
import { DefaultProps } from './types'

interface CollapseProps extends DefaultProps {
    collapsedHeight?: string
    in: boolean
    timeout?: number | { enter?: number, exit?: number } | 'auto'
}

const Collapse: FC<CollapseProps> = ({
    children,
    padding,
    margin,
    style = {},
    ...otherProps
}) =>
    <MuiCollapse
        style={ { padding, margin, ...style } }
        { ...otherProps }>
        { children }
    </MuiCollapse>

export default Collapse
