import { Paper as MuiPaper } from '@material-ui/core'
import React from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    children?: React.ReactNode
    square?: boolean
    elevation?: number
}

const Paper: React.SFC<IProps> = ({ children, style = {}, padding, margin, ...otherProps }) =>
    <MuiPaper
        { ...otherProps }
        style={ { padding, margin, ...style } }>
        { children }
    </MuiPaper>

export default Paper
