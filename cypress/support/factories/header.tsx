import React from 'react'
import { mount } from 'cypress/react18'
import { Header } from '../../../src'
import { generateTypedMock } from '../component'
import { Generators } from '../'
import { HeaderVariant } from '../types-interfaces-enums'

export const HeaderFactory = (preset: HeaderVariant) => {
    generateTypedMock<string>({ value: 'header-content', type: 'Word' }).then(
        mockedWord => {
            const props = Generators.headerPropsGenerator(preset)
            mount(
                <Header data-cy='header-container' {...props}>
                    {mockedWord}
                </Header>
            )
        }
    )
}
