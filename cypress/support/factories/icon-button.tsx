import React from 'react'
import { mount } from 'cypress/react18'
import { IconButton } from '../../../src'
import { Add as IconAdd } from '../../../src/icons'
import { Generators } from '..'
import { IconButtonVariant } from '../types-interfaces-enums'
import { generateSpy } from '../component'

export const IconButtonFactory = (preset: IconButtonVariant) => {
    const props = Generators.IconButtonPropsGenerator(preset)
    const onClickSpy = generateSpy('icon-button-onclick')
    mount(
        <IconButton data-cy='icon-button' {...props} onClick={onClickSpy}>
            <IconAdd />
        </IconButton>
    )
}
