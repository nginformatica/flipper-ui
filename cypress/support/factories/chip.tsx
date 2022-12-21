import { ChipProps } from '@material-ui/core'
import { mount } from 'cypress/react'
import React from 'react'
import { IChipProps } from 'src/core/Chip'
import { TChipValues } from 'src/core/ChipField'
import { Generators } from '../'
import { Chip, ChipField } from '../../../src'
import { generateSpy, generateTypedMock } from '../component'
import { ChipVariant } from '../types-interfaces-enums'

export const ChipFactory = (preset: ChipVariant) => {
    const onDeleteSpy = generateSpy('checkbox-onchange')
    generateTypedMock<string>({
        value: 'checkbox-params',
        type: 'Words'
    }).then(mockedWords => {
        const commonProps: ChipProps & IChipProps = {
            label: mockedWords,
            onDelete: onDeleteSpy
        }

        const props = Generators.chipPropsGenerator(preset, commonProps)

        mount(<Chip data-cy='chip-container' {...props} />)
    })
}

export const ChipFieldFactory = () => {
    const onAddSpy = generateSpy('chip-field-on-add')
    const onDeleteSpy = generateSpy('chip-field-on-delete')
    generateTypedMock<TChipValues[]>({
        value: 'chip-field-values',
        type: 'ListOfChips'
    }).then(chipsList => {
        mount(
            <ChipField
                data-cy='chip-field-container'
                label='chips'
                onAdd={onAddSpy}
                onDelete={onDeleteSpy}
                values={chipsList}
                variant='outlined'
            />
        )
    })
}
