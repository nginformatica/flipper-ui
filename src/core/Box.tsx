import React from 'react'
import { IDefault } from './Advertise'
import Paper from './Paper'

interface IProps extends IDefault {
    primary?: boolean
    children?: React.ReactNode
}

const styles = {
    box: {
        minHeight: '400px',
        padding: '28px'
    }
}

const Box = ({ children, style, ...otherProps }: IProps) =>
    <Paper
        style={ { ...styles.box, ...style } }
        { ...otherProps }>
        { children }
    </Paper>

export default Box
