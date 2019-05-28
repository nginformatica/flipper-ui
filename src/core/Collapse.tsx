import { Collapse as MuiCollapse } from '@material-ui/core'
import React, { FC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    collapsedHeight?: string
    in: boolean
    timeout?: number | { enter?: number, exit?: number } | 'auto'
}

const Collapse: FC<IProps> = ({
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
