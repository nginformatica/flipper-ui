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
    id: 'generic-testing-id',
    minHeight: generateNumber(200, 500)
})

export const generateFakeStyleParams = () => ({
    ...omit(['minHeight'], generateFakeBoxParams())
})

export const generateIcon = () => <Add />

export const generateListOfChips = () => {
    const length = generateNumber(2, 10)
    const list = []
    for (let i = 0; i < length; i++) {
        list.push({
            value: faker.random.word()
        })
    }

    return list
}
