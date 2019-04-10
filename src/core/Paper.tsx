import { Paper as MuiPaper } from '@material-ui/core'
import React, { ReactNode, SFC } from 'react'
import { IDefault } from './Advertise'

export interface IProps extends IDefault {
    children?: ReactNode
    square?: boolean
    elevation?: number
}

const Paper: SFC<IProps> = ({
    children,
    style = {},
    padding,
    margin,
    ...otherProps
}) =>
    <MuiPaper
        { ...otherProps }
        style={ { padding, margin, ...style } }>
        { children }
    </MuiPaper>

export default Paper
