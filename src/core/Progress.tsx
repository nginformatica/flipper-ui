import {
    CircularProgress as MuiCircularProgress,
    LinearProgress as MuiLinearProgress
} from '@material-ui/core'
import React from 'react'
import { IDefault } from './Advertise'

interface ILinear {
    color?: 'primary' | 'secondary'
    valueBuffer?: number
    variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query'
}

interface ICircular {
    size?: string | number
    color?: 'primary' | 'secondary' | 'inherit'
    variant?: 'determinate' | 'indeterminate' | 'static'
}

interface IProps extends IDefault {
    value?: number
    linear?: boolean
    margin?: number | string
}

const Progress = ({ linear, style, margin, ...otherProps }: IProps & ICircular & ILinear) =>
    linear
        ? <MuiLinearProgress style={ { margin, ...style } } { ...otherProps } />
        : <MuiCircularProgress style={ { margin, ...style } }  { ...otherProps } />

export default Progress
