import React from 'react'
import { mount } from 'cypress/react'
import { Header } from '../../../src'
import { generateMock } from '../component'
import { Generators } from '../'
import { HeaderVariant } from '../types-interfaces-enums'

export const HeaderFactory = (preset: HeaderVariant) => {
    generateMock({ value: 'header-content', type: 'Word' }).then(mockedWord => {
        const props = Generators.headerPropsGenerator(preset)
        mount(<Header {...props}>{mockedWord}</Header>)
    })
}
