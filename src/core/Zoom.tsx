import { Zoom as MuiZoom } from '@material-ui/core'
import React from 'react'
import { DefaultProps } from './types'

interface ZoomProps extends DefaultProps {
    in: boolean
    timeout?: number | { enter?: number, exit?: number }
    children?: React.ReactElement<{}>
}

const Zoom = ({
    children,
    padding,
    margin,
    style = {},
    ...otherProps
}: ZoomProps) =>
    <MuiZoom
        style={ { padding, margin, ...style } }
        { ...otherProps }>
        { children }
    </MuiZoom>

export default Zoom
