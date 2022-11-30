import React from 'react'
import faker from 'faker'
import { Button, ListItem } from '../../../../src'
import { Backup as IconBackup } from '../../../../src/icons'
import { Add } from '@material-ui/icons'
import { omit } from 'ramda'
import { v4 as uuid } from 'uuid'
import { generateGenericSpy } from '../../component'

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

export const generateListOfItems = () => {
    const length = generateNumber(2, 10)
    const list = []
    for (let i = 0; i < length; i++) {
        list.push(<ListItem key={uuid()} icon={<IconBackup />} />)
    }

    return list
}

export const generateListOfSpiedItems = () => {
    const length = generateNumber(2, 10)
    const list = []
    for (let i = 0; i < length; i++) {
        const onClickSpy = generateGenericSpy(`generic-spy-${i}`)
        list.push(
            <ListItem
                onClick={onClickSpy}
                title={`Item ${i}`}
                id={`testing-generic-${i}`}
                key={uuid()}
            />
        )
    }

    cy.wrap(list.length).as('list-of-spied-items-length')

    return list
}
