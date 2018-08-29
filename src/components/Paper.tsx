import { Paper as MuiPaper } from '@material-ui/core'
import React from 'react'

interface IProps {
    children?: React.ReactNode
    style?: object
    square?: boolean
    elevation?: number
    padding?: number
}

const Paper = ({ children, style, padding, ...otherProps }: IProps) =>
    <MuiPaper
        { ...otherProps }
        style={ { ...style, padding } }>
        { children }
    </MuiPaper>

export default Paper
