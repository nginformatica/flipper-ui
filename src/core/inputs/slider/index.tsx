import React from 'react'
import MuiSlider from '@mui/material/Slider'
import { makeStyles } from '@mui/styles'
import type { DefaultProps } from '../../types'
import type { SliderProps } from '@mui/material/Slider'
import { theme } from '@/theme'

export interface ISliderProps
    extends Omit<SliderProps, 'defaultValue'>,
        DefaultProps {
    defaultValue?: number | number[]
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
}

type TProps = {
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
}

const labels = {
    primary: theme.colors.primary.main,
    secondary: theme.colors.secondary.main,
    error: theme.colors.feedback.danger,
    info: theme.colors.feedback.info,
    success: theme.colors.feedback.success,
    warning: theme.colors.feedback.warning
}

const useStyles = makeStyles(() => ({
    valueLabel: (props: TProps) => ({
        backgroundColor: labels[props.color || 'primary'],
        borderRadius: '5px'
    })
}))

const Slider = ({
    padding,
    margin,
    size,
    color = 'primary',
    style = {},
    defaultValue,
    ...otherProps
}: ISliderProps) => {
    const classes = useStyles({ color })

    return (
        <MuiSlider
            {...otherProps}
            size={size || 'small'}
            color={color}
            classes={{ valueLabel: classes.valueLabel }}
            defaultValue={defaultValue}
            style={{ padding, margin, ...style }}
        />
    )
}

export default Slider
