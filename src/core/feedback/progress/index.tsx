import React from 'react'
import MuiCircularProgress from '@mui/material/CircularProgress'
import MuiLinearProgress from '@mui/material/LinearProgress'
import type { DefaultProps } from '../../types'

export interface ILinear {
    color?:
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning'
        | 'inherit'
    variant?: 'buffer' | 'determinate' | 'indeterminate' | 'query'
    valueBuffer?: number
    primaryColor?: string
    barPrimaryColor?: string
    barSecondaryColor?: string
}

export interface ICircular {
    size?: string | number
    variant?: 'determinate' | 'indeterminate'
    color?:
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning'
        | 'inherit'
}

export interface ProgressProps extends DefaultProps {
    value?: number
    linear?: boolean
}

export interface IColors {
    primaryColor?: string
    barPrimaryColor?: string
    barSecondaryColor?: string
}

const Progress = ({
    linear,
    style = {},
    margin,
    padding,
    valueBuffer,
    primaryColor,
    barPrimaryColor,
    barSecondaryColor,
    ...otherProps
}: ProgressProps & ICircular & ILinear) => {
    return linear ? (
        <MuiLinearProgress
            style={{ margin, padding, ...style }}
            valueBuffer={valueBuffer}
            sx={{
                backgroundColor: primaryColor,
                '.MuiLinearProgress-barColorPrimary': {
                    backgroundColor: barPrimaryColor
                },
                '.MuiLinearProgress-barColorSecondary': {
                    backgroundColor: barSecondaryColor
                }
            }}
            {...otherProps}
        />
    ) : (
        <MuiCircularProgress
            style={{ margin, padding, ...style }}
            {...otherProps}
        />
    )
}

export default Progress
