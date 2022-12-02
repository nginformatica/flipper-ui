import React, { ChangeEvent, useState } from 'react'
import { TextFieldVariant } from '../types-interfaces-enums'
import { Generators } from '..'
import { mount } from 'cypress/react'
import { ListItem, TextField } from '../../../src'
import { generateSpy } from '../component'
import { generateListOfMockedTextFields } from '../utils/generators'
import { cond, T } from 'ramda'
import { validator } from '../utils'

interface IProps {
    fields: {
        label: string
        value: string
    }[]
}

const ComponentWithSelect: React.FC<IProps> = props => {
    const [value, setValue] = useState(props.fields[0].value)

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setValue(event.target.value)
    }

    return (
        <TextField onChange={handleChange} select value={value}>
            {props.fields.map(({ label, value }) => (
                <ListItem key={value} value={value}>
                    {label}
                </ListItem>
            ))}
        </TextField>
    )
}

const ComponentWithSelectAndClear: React.FC<IProps> = props => {
    const [value, setValue] = useState(props.fields[0].value)

    const onClear = () => {
        setValue('')
    }

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setValue(event.target.value)
    }

    return (
        <TextField
            select
            value={value}
            hasClear
            onClear={onClear}
            onChange={handleChange}>
            {props.fields.map(({ label, value }) => (
                <ListItem key={value} value={value}>
                    {label}
                </ListItem>
            ))}
        </TextField>
    )
}

export const TextFieldFactory = (preset: TextFieldVariant) => {
    const onHelpClickSpy = generateSpy('text-field-helper')
    const props = Generators.TextFieldPropsGenerator(preset, onHelpClickSpy)

    generateListOfMockedTextFields(6)

    const validate = (variant: TextFieldVariant) =>
        validator<TextFieldVariant>(variant)

    cy.get('@list-of-text-fields').then(fields => {
        return cond([
            [
                validate('with-select'),
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                () => mount(<ComponentWithSelect fields={fields} />)
            ],
            [
                validate('with-select-clear'),
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                () => mount(<ComponentWithSelectAndClear fields={fields} />)
            ],
            [T, () => mount(<TextField {...props} />)]
        ])(preset)
    })
}
