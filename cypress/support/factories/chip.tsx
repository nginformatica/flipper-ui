import { mount } from 'cypress/react'
import React from 'react'
import { Generators } from '../'
import { Chip } from '../../../src'
import { generateMock, generateSpy } from '../component'
import { ChipVariant } from '../types-interfaces-enums'

export const ChipFactory = (preset: ChipVariant) => {
    const onDeleteSpy = generateSpy('checkbox-onchange')
    generateMock({
        value: 'checkbox-params',
        type: 'Words'
    }).then(mockedWords => {
        const commonProps = {
            label: mockedWords,
            onDelete: onDeleteSpy
        }

        const props = Generators.chipPropsGenerator(preset, commonProps)

        console.log({ props })

        mount(<Chip {...props} />)
    })
}
