import React from 'react'
import { mount } from 'cypress/react18'
import { MaskField } from '../../../src'
import { MaskFieldVariant } from '../types-interfaces-enums'
import { Generators } from '..'

export const MaskFieldFactory = (preset: MaskFieldVariant) => {
    const props = Generators.MaskFieldPropsGenerator(preset)
    mount(<MaskField data-cy='mask-field' {...props} />)
}
