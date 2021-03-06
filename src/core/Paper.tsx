import { Paper as MuiPaper } from '@material-ui/core'
import React, { FC } from 'react'
import { IDefault } from './Advertise'

export interface IProps extends IDefault {
    square?: boolean
    elevation?: number
}

const Paper: FC<IProps> = ({
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
