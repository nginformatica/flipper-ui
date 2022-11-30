import { mount } from 'cypress/react'
import { generateFakeNodeTree } from '../utils/generators'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getLength = (value: any | any[]): any => {
    if (value instanceof Array) {
        const values = []
        for (let i = 0; i < value.length; i++) {
            values.push(getLength(value[i].props.children))
        }

        return values
    }

    return 1
}

export const NodeFactory = () => {
    const { elements, names } = generateFakeNodeTree()

    const schema = getLength(elements)

    cy.wrap({ schema, names }).as('node-schema')

    mount(elements)
}
