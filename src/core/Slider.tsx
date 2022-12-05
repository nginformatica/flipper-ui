import React, { FC } from 'react'
import MuiSlider, { SliderProps } from '@material-ui/core/Slider'
import { DefaultProps } from './types'

interface ISliderProps {
    defaultValue?: number | number[]
}

export type FlipperSliderProps = Omit<SliderProps, 'defaultValue'> &
    DefaultProps &
    ISliderProps

const Slider: FC<FlipperSliderProps> = ({
    padding,
    margin,
    style = {},
    defaultValue,
    ...otherProps
}) => (
    <MuiSlider
        {...otherProps}
        defaultValue={defaultValue}
        style={{ padding, margin, ...style }}
    />
)

export default Slider
