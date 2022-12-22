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
    const generatedProps = Generators.TextFieldPropsGenerator(
        preset,
        onHelpClickSpy
    )

    const props = Object.assign({}, generatedProps, {
        'data-cy': 'text-field-container'
    })

    generateListOfMockedTextFields(6)

    const validate = (variant: TextFieldVariant) =>
        validator<TextFieldVariant>(variant)

    cy.get<IProps['fields']>('@list-of-text-fields').then(fields => {
        return cond([
            [
                validate('with-select'),
                () => mount(<ComponentWithSelect fields={fields} />)
            ],
            [
                validate('with-select-clear'),
                () => mount(<ComponentWithSelectAndClear fields={fields} />)
            ],
            [T, () => mount(<TextField {...props} />)]
        ])(preset)
    })
}
