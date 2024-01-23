import React from 'react'
import MuiSlider from '@material-ui/core/Slider'
import type { DefaultProps } from '@/core/types'
import type { SliderProps } from '@material-ui/core/Slider'

export interface ISliderProps {
    defaultValue?: number | number[]
}

export type FlipperSliderProps = Omit<SliderProps, 'defaultValue'> &
    DefaultProps &
    ISliderProps

export const Slider = ({
    padding,
    margin,
    style = {},
    defaultValue,
    ...otherProps
}: FlipperSliderProps) => (
    <MuiSlider
        {...otherProps}
        defaultValue={defaultValue}
        style={{ padding, margin, ...style }}
    />
)

export default Slider
