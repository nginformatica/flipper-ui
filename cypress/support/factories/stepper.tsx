import React from 'react'
import { mount } from 'cypress/react'
import { Stepper } from '../../../src'
import { Generators } from '..'
import { StepperVariant } from '../types-interfaces-enums'
import { StepperProps } from 'src/core/Stepper'

export const StepperFactory = (
    preset: StepperVariant,
    steps: StepperProps['steps']
) => {
    console.log({ steps })
    const props = Generators.StepperPropsGenerator(preset, steps)
    mount(<Stepper {...props} />)
}
