import { mount } from 'cypress/react'
import React from 'react'
import { TChipValues } from 'src/core/ChipField'
import { Generators } from '../'
import { Chip, ChipField } from '../../../src'
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

        mount(<Chip {...props} />)
    })
}

export const ChipFieldFactory = () => {
    const onAddSpy = generateSpy('chip-field-on-add')
    const onDeleteSpy = generateSpy('chip-field-on-delete')
    generateMock({
        value: 'chip-field-values',
        type: 'ListOfChips'
    }).then(chipsList => {
        mount(
            <ChipField
                label='chips'
                onAdd={onAddSpy}
                onDelete={onDeleteSpy}
                values={chipsList as TChipValues[]}
                variant='outlined'
            />
        )
    })
}
