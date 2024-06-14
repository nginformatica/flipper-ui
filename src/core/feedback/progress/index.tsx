import React from 'react'
import MuiCircularProgress from '@mui/material/CircularProgress'
import MuiLinearProgress from '@mui/material/LinearProgress'
import { makeStyles } from '@mui/styles'
import type { DefaultProps } from '@/core/types'

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
    rootColor?: string
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
    rootColor?: string
    primaryColor?: string
    barPrimaryColor?: string
    barSecondaryColor?: string
}

type TProps = {
    rootColor?: string
    primaryColor?: string
    barPrimaryColor?: string
    barSecondaryColor?: string
}

const useStyles = makeStyles(() => ({
    root: (props: TProps) => ({
        backgroundColor: props.rootColor
    }),
    colorPrimary: (props: TProps) => ({
        backgroundColor: props.primaryColor
    }),
    barColorPrimary: (props: TProps) => ({
        backgroundColor: props.barPrimaryColor
    }),
    barColorSecondary: (props: TProps) => ({
        backgroundColor: props.barSecondaryColor
    })
}))

const Progress = ({
    linear,
    style = {},
    margin,
    padding,
    rootColor,
    primaryColor,
    barPrimaryColor,
    barSecondaryColor,
    ...otherProps
}: ProgressProps & ICircular & ILinear) => {
    const classes = useStyles({
        rootColor,
        primaryColor,
        barPrimaryColor,
        barSecondaryColor
    })

    return linear ? (
        <MuiLinearProgress
            style={{ margin, padding, ...style }}
            classes={{
                root: classes.root,
                colorPrimary: classes.colorPrimary,
                barColorPrimary: classes.barColorPrimary,
                barColorSecondary: classes.barColorSecondary
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
