import React, { FC } from 'react'
import MuiSlider, { SliderProps } from '@material-ui/core/Slider'
import { IDefault } from './Advertise'

interface IProps {
  defaultValue?: number | number[]
}

const Slider: FC<Omit<SliderProps, 'defaultValue'> & IDefault & IProps> =
    ({ padding, margin, style = {}, defaultValue, ...otherProps }) =>
        <MuiSlider
            { ...otherProps }
            defaultValue={ defaultValue }
            style={ { padding, margin, ...style } }
        />

export default Slider
