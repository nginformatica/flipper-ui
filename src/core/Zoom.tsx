import { Zoom as MuiZoom } from '@material-ui/core'
import React from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
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
}: IProps) =>
    <MuiZoom
        style={ { padding, margin, ...style } }
        { ...otherProps }>
        { children }
    </MuiZoom>

export default Zoom
