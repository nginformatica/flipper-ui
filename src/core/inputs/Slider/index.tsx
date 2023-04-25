import React from 'react'
import MuiSlider, { SliderProps } from '@material-ui/core/Slider'
import { DefaultProps } from '../../types'

export interface ISliderProps {
    defaultValue?: number | number[]
}

export type FlipperSliderProps = Omit<SliderProps, 'defaultValue'> &
    DefaultProps &
    ISliderProps

const Slider = ({
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
