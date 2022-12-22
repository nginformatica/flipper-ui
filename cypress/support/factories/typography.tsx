import React from 'react'
import { mount } from 'cypress/react'
import { Typography } from '../../../src'
import { Generators } from '..'
import { TypographyVariant } from '../types-interfaces-enums'
import faker from 'faker'

export const TypographyFactory = (preset: TypographyVariant) => {
    const generatedProps = Generators.TypographyPropsGenerator(preset)
    const props = Object.assign({}, generatedProps, {
        'data-cy': 'typography-container'
    })
    mount(<Typography {...props}>{faker.random.word()}</Typography>)
}
