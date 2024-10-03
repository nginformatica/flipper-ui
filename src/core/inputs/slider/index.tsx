import React from 'react'
import MuiSlider from '@mui/material/Slider'
import { makeStyles } from '@mui/styles'
import type { DefaultProps } from '../../types'
import type { SliderProps } from '@mui/material/Slider'
import { theme } from '@/theme'

const { feedback, primary, secondary } = theme.colors

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
    primary: primary.main,
    secondary: secondary.main,
    error: feedback.danger,
    info: feedback.info,
    success: feedback.success,
    warning: feedback.warning
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
    color,
    style = {},
    defaultValue,
    ...otherProps
}: ISliderProps) => {
    const classes = useStyles({ color })

    return (
        <MuiSlider
            {...otherProps}
            color={color}
            size={size || 'small'}
            defaultValue={defaultValue}
            style={{ padding, margin, ...style }}
            classes={{ valueLabel: classes.valueLabel }}
        />
    )
}

export default Slider
