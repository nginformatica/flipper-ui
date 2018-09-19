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
    classes?: {
        root?: string
        barColorPrimary?: string
        barColorSecondary?: string
    }
}

interface ICircular {
    size?: string | number
    color?: 'primary' | 'secondary' | 'inherit'
    variant?: 'determinate' | 'indeterminate' | 'static'
}

interface IProps extends IDefault {
    value?: number
    linear?: boolean
}

const Progress: React.SFC<IProps & ICircular & ILinear> = ({ linear, style = {}, margin, padding, ...otherProps }) =>
    linear
        ? <MuiLinearProgress style={ { margin, padding, ...style } } { ...otherProps } />
        : <MuiCircularProgress style={ { margin, padding, ...style } }  { ...otherProps } />

export default Progress
