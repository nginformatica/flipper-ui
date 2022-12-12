import { Grow as MuiGrow } from '@material-ui/core'
import React from 'react'
import { DefaultProps } from './types'

interface GrowProps extends DefaultProps {
    in: boolean
    timeout?: number | { enter?: number; exit?: number } | 'auto'
    children?: React.ReactElement<Record<string, unknown>>
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
