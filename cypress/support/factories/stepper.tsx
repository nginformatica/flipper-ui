import React from 'react'
import { mount } from 'cypress/react18'
import { Stepper } from '../../../src'
import { Generators } from '..'
import { StepperVariant } from '../types-interfaces-enums'
import { StepperProps } from 'src/core/Stepper'

export const StepperFactory = (
    preset: StepperVariant,
    steps: StepperProps['steps']
) => {
    const generatedProps = Generators.StepperPropsGenerator(preset, steps)
    const props = Object.assign({}, generatedProps, {
        'data-cy': 'stepper-container'
    })
    mount(<Stepper {...props} />)
}
