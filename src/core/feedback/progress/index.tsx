import React from 'react'
import {
    CircularProgress as MuiCircularProgress,
    LinearProgress as MuiLinearProgress
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
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
    rootColor?: string
    primaryColor?: string
    barPrimaryColor?: string
    barSecondaryColor?: string
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
