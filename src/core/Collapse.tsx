import { Collapse as MuiCollapse } from '@material-ui/core'
import React, { SFC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    collapseHeight: string
    in: boolean
    timout: number | { ender?: number, exit?: number } | 'auto'
}

const Collapse: SFC<IProps> = ({ children, padding, margin, style = {}, ...otherProps }) =>
    <MuiCollapse
        style={ { padding, margin, ...style } }
        { ...otherProps }>
        { children }
    </MuiCollapse>

export default Collapse
