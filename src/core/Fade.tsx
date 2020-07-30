import { Fade as MuiFade } from '@material-ui/core'
import React from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    in: boolean
    timeout?: number | { enter?: number, exit?: number }
    children?: React.ReactElement<{}>
}

const Fade = ({
    children,
    padding,
    margin,
    style = {},
    ...otherProps
}: IProps) =>
    <MuiFade
        style={ { padding, margin, ...style } }
        { ...otherProps }>
        { children }
    </MuiFade>

export default Fade
