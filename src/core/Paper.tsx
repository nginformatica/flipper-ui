import { Paper as MuiPaper } from '@material-ui/core'
import React from 'react'

interface IProps {
    children?: React.ReactNode
    style?: object
    square?: boolean
    elevation?: number
    padding?: number
    margin?: number
}

const Paper = ({ children, style = {}, padding, margin, ...otherProps }: IProps) =>
    <MuiPaper
        { ...otherProps }
        style={ { padding, margin, ...style } }>
        { children }
    </MuiPaper>

export default Paper
