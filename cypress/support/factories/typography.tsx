import React from 'react'
import { mount } from 'cypress/react'
import { Typography } from '../../../src'
import { Generators } from '..'
import { TypographyVariant } from '../types-interfaces-enums'
import faker from 'faker'

export const TypographyFactory = (preset: TypographyVariant) => {
    const props = Generators.TypographyPropsGenerator(preset)
    mount(<Typography {...props}>{faker.random.word()}</Typography>)
}
