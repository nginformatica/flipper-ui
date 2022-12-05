import {
    CircularProgress as MuiCircularProgress,
    LinearProgress as MuiLinearProgress
} from '@material-ui/core'
import React, { FC } from 'react'
import { DefaultProps } from './types'

interface ILinear {
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

interface ICircular {
    size?: string | number
    color?: 'primary' | 'secondary' | 'inherit'
    variant?: 'determinate' | 'indeterminate' | 'static'
}

interface ProgressProps extends DefaultProps {
    value?: number
    linear?: boolean
}

const Progress: FC<ProgressProps & ICircular & ILinear> = ({
    linear,
    style = {},
    margin,
    padding,
    ...otherProps
}) =>
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
