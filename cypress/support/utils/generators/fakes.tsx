import { Add } from '@material-ui/icons'
import faker from 'faker'
import { omit } from 'ramda'
import React from 'react'
import { INode } from 'src/core/Tree'
import { v4 as uuid } from 'uuid'
import {
    Button,
    ListItem,
    Node,
    TableBody,
    TableCell,
    TableRow
} from '../../../../src'
import { Backup as IconBackup } from '../../../../src/icons'
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

export const generateListOfSpiedItems = (maxItens?: number): JSX.Element[] => {
    const length = generateNumber(2, maxItens ?? 10)
    const list = []
    for (let i = 0; i < length; i++) {
        const onClickSpy = generateGenericSpy(`generic-spy-${i}`)
        list.push(
            <ListItem
                onClick={onClickSpy}
                value={i.toString()}
                title={`Item ${i}`}
                id={`testing-generic-${i}`}
                key={uuid()}>{`Option ${i}`}</ListItem>
        )
    }

    cy.wrap(list.length).as('list-of-spied-items-length')

    return list
}

export const generateListOfMockedTextFields = (maxItens?: number): void => {
    const length = generateNumber(2, maxItens ?? 10)
    const list = []
    for (let i = 0; i < length; i++) {
        const word = faker.random.word().toLowerCase()
        list.push({ label: word, value: word })
    }

    cy.wrap(list).as('list-of-text-fields')
}

export const generateTreeWithNodes = () => {
    const depth = generateNumber(1, 2)
    let level = 0
    const namesToMock: string[] = []

    const generateNode = (): INode[] => {
        if (level <= depth) {
            level++

            const size = generateNumber(1, 2)
            const elements: INode[] = []

            for (let i = 0; i < size; i++) {
                const name = faker.random.word()
                namesToMock.push(name)
                const nodes: INode = { id: uuid(), name, nodes: generateNode() }
                elements.push(nodes)
            }

            return elements
        } else {
            const size = generateNumber(1, 2)
            const elements: INode[] = []

            for (let i = 0; i < size; i++) {
                const name = faker.random.word()
                namesToMock.push(name)
                const node: INode = { id: uuid(), name, nodes: undefined }
                elements.push(node)
            }

            return elements
        }
    }

    const elements = generateNode()

    return {
        elements,
        names: namesToMock
    }
}

export const generateFakeNodeTree = () => {
    const depth = generateNumber(1, 2)
    let level = 0
    const namesToMock: string[] = []

    const generateNode = (): JSX.Element[] | JSX.Element[][] => {
        if (level <= depth) {
            level++

            const size = generateNumber(1, 2)
            const elements: JSX.Element[] = []

            for (let i = 0; i < size; i++) {
                const name = faker.random.word()
                namesToMock.push(name)
                const id = uuid()
                elements.push(
                    <Node id={uuid()} key={id} name={name}>
                        {generateNode()}
                    </Node>
                )
            }

            return elements
        } else {
            const size = generateNumber(1, 2)
            const elements: JSX.Element[] = []

            for (let i = 0; i < size; i++) {
                const name = faker.random.word()
                namesToMock.push(name)
                const id = uuid()
                elements.push(<Node id={id} key={id} name={name} />)
            }

            return elements
        }
    }

    const elements = generateNode()

    return {
        elements,
        names: namesToMock
    }
}

export const generateFakeTableBody = () => {
    const list: JSX.Element[] = []
    const length = generateNumber(3, 10)

    const elementsToMock = []

    for (let i = 0; i < length; i++) {
        const name = faker.name.firstName()
        const email = faker.internet.email()
        list.push(
            <TableRow>
                <TableCell>{name}</TableCell>
                <TableCell>{email}</TableCell>
            </TableRow>
        )
        elementsToMock.push(name, email)
    }

    cy.wrap(elementsToMock).as('table-elements-mock')

    return <TableBody>{...list}</TableBody>
}
