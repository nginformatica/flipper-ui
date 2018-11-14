import { Grow as MuiGrow } from '@material-ui/core'
import React, { SFC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    children: React.ReactElement<{}>
    in: boolean
    timeout?: number | { enter?: number, exit?: number } | 'auto'
}

const Grow: SFC<IProps> = ({ children, padding, margin, style = {}, ...otherProps }) =>
    <MuiGrow
        style={ { padding, margin, ...style } }
        { ...otherProps }>
        { children }
    </MuiGrow>

export default Grow
