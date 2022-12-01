import React from 'react'
import { mount } from 'cypress/react'
import { Slider } from '../../../src'
import { generateSpy } from '../component'
import { Generators } from '..'
import { SliderVariant } from '../types-interfaces-enums'

export const SliderFactory = (preset: SliderVariant) => {
    const props = Generators.SliderPropsGenerator(preset)
    const onChangeSpy = generateSpy('slider-percentage')
    mount(<Slider name='percentage-range' onChange={onChangeSpy} {...props} />)
}
