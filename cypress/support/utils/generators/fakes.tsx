import React from 'react'
import faker from 'faker'
import { Button } from '../../../../src'
import { Add } from '@material-ui/icons'
import { omit } from 'ramda'

export const generateNumber = (min: number, max: number): number => {
    const number = faker.datatype.number(max)

    return number < min ? min : number
}

export const generateFakeName = () => faker.name.firstName()
export const generateFakeNumber = (min: number, max: number) => {
    const number = faker.datatype.number(max)

    return number < min ? min : number
}
export const generateFakeWord = () => faker.random.word()
export const generateFakeWords = () => faker.random.words()
export const generateListOfFakeWords = (length: number) => {
    const size = length
    const list = []
    for (let i = 0; i < size; i++) {
        list.push(faker.random.word())
    }

    return list
}
export const generateFakeLetter = (length: number) =>
    faker.random.alpha({ count: length })
export const generateJSXElement = (onClick?: () => void) => (
    <Button id='mocked-button' variant='outlined' onClick={onClick}>
        Try changing the counter to Zero
    </Button>
)
export const generateFakeBoxParams = () => ({
    padding: generateNumber(1, 20),
    margin: generateNumber(1, 20),
    name: faker.random.word(),
    className: faker.random.word(),
    id: 'box-testing-id',
    minHeight: generateNumber(200, 500)
})

export const generateFakeCardParams = () => ({
    ...omit(['minHeight'], generateFakeBoxParams()),
    id: 'card-testing-id'
})

export const generateFakeCheckboxParams = () => ({
    ...omit(['minHeight'], generateFakeBoxParams()),
    id: 'checkbox-testing-id'
})

export const generateIcon = () => <Add />
