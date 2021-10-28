import React, { FC } from 'react'
import MuiSlider, { SliderProps } from '@material-ui/core/Slider'
import { DefaultProps } from './types'

interface ISliderProps {
  defaultValue?: number | number[]
}

const Slider: FC<Omit<SliderProps, 'defaultValue'> & DefaultProps & ISliderProps> =
    ({ padding, margin, style = {}, defaultValue, ...otherProps }) =>
        <MuiSlider
            { ...otherProps }
            defaultValue={ defaultValue }
            style={ { padding, margin, ...style } }
        />

export default Slider
