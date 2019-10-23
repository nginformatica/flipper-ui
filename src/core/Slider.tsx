import React, { FC } from 'react'
import MuiSlider, { SliderProps } from '@material-ui/core/Slider'
import { IDefault } from './Advertise'

const Slider: FC<SliderProps & IDefault> =
    ({ padding, margin, style = {}, ...otherProps }) =>
        <MuiSlider
            { ...otherProps }
            style={ { padding, margin, ...style } }
        />

export default Slider
