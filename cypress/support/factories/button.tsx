import { mount } from 'cypress/react'
import React from 'react'
import { Button } from '../../../src'
import { generateMock, generateSpy } from '../../support/component'
import { ButtonVariant, MockTypes } from '../types-interfaces-enums'
import { buttonPropsGenerator } from '../utils/generators/button-props'

export const ButtonFactory = (
    preset: ButtonVariant,
    type: MockTypes = 'Word'
) =>
    generateMock({
        value: 'button-label',
        type
    }).then(mock => {
        const onClickSpy = generateSpy('button-onclick')
        const params = buttonPropsGenerator(preset)

        console.log({ mock })

        mount(
            <Button {...params} id='button-test' onClick={onClickSpy}>
                {mock}
            </Button>
        )
    })