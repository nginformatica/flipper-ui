import React from 'react'
import {
    CircularProgress as MuiCircularProgress,
    LinearProgress as MuiLinearProgress
} from '@material-ui/core'
import type { DefaultProps } from '../../types'

export interface ILinear {
    color?: 'primary' | 'secondary'
    valueBuffer?: number
    variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query'
    classes?: {
        root?: string
        colorPrimary?: string
        barColorPrimary?: string
        barColorSecondary?: string
    }
}

export interface ICircular {
    size?: string | number
    color?: 'primary' | 'secondary' | 'inherit'
    variant?: 'determinate' | 'indeterminate' | 'static'
}

export interface ProgressProps extends DefaultProps {
    value?: number
    linear?: boolean
}

export const Progress = ({
    linear,
    style = {},
    margin,
    padding,
    ...otherProps
}: ProgressProps & ICircular & ILinear) =>
    linear ? (
        <MuiLinearProgress
            style={{ margin, padding, ...style }}
            {...otherProps}
        />
    ) : (
        <MuiCircularProgress
            style={{ margin, padding, ...style }}
            {...otherProps}
        />
    )

export default Progress
