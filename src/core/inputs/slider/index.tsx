import React from 'react'
import MuiSlider from '@mui/material/Slider'
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

const labels = {
    primary: primary.main,
    secondary: secondary.main,
    error: feedback.danger,
    info: feedback.info,
    success: feedback.success,
    warning: feedback.warning
}

const Slider = ({
    padding,
    margin,
    size,
    color,
    style = {},
    defaultValue,
    ...otherProps
}: ISliderProps) => {
    return (
        <MuiSlider
            {...otherProps}
            color={color}
            size={size || 'small'}
            defaultValue={defaultValue}
            style={{ padding, margin, ...style }}
            sx={{
                '.MuiSlider-valueLabel': {
                    borderRadius: '5px',
                    backgroundColor: labels[color || 'primary']
                }
            }}
        />
    )
}

export default Slider
