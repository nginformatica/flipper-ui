import React, { useState, ChangeEvent } from 'react'
import { mount } from 'cypress/react'
import { Select } from '../../../src'
import { Generators } from '../'
import type { SelectVariant } from '../types-interfaces-enums'
import { validator } from '../utils'
import { ifElse, omit } from 'ramda'

interface IProps {
    list: JSX.Element[]
}

const Component: React.FC<IProps> = props => {
    const [select, setSelect] = useState('0')

    function handleChange(
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        setSelect(event.target.value)
    }

    return (
        <Select
            {...omit(['list'], props)}
            value={select}
            onChange={handleChange}>
            {...props.list}
        </Select>
    )
}

const ComponentWithClear: React.FC<IProps> = props => {
    const [select, setSelect] = useState('0')

    function handleChange(
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        setSelect(event.target.value)
    }

    const handleClear = () => {
        setSelect('')
    }

    return (
        <Select
            hasClear={true}
            onClear={handleClear}
            value={select}
            onChange={handleChange}
            {...omit(['list'], props)}>
            {...props.list}
        </Select>
    )
}

export const SelectFactory = (variant: SelectVariant) => {
    const validate = (variant: SelectVariant) =>
        validator<SelectVariant>(variant)
    const options = Generators.generateListOfSpiedItems(3)

    return ifElse(
        validate('with-clear'),
        () =>
            mount(
                <ComponentWithClear data-cy='select-container' list={options} />
            ),
        () => mount(<Component data-cy='select-container' list={options} />)
    )(variant)
}
