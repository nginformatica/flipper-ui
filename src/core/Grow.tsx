import { Grow as MuiGrow } from '@material-ui/core'
import React from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    in: boolean
    timeout?: number | { enter?: number, exit?: number } | 'auto'
    children?: React.ReactElement<{}>
}

const Grow = ({
    children,
    padding,
    margin,
    style = {},
    ...otherProps
}: IProps) =>
    <MuiGrow
        style={ { padding, margin, ...style } }
        { ...otherProps }>
        { children }
    </MuiGrow>

export default Grow
