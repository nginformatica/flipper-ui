import React from 'react'
import { mount } from 'cypress/react'
import { Tree } from '../../../src'
import { generateTreeWithNodes } from '../utils/generators'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getLength = (value: any | any[]): any => {
    if (value instanceof Array) {
        const values = []
        for (let i = 0; i < value.length; i++) {
            values.push(getLength(value[i]))
        }

        return values
    }

    return 1
}

export const TreeFactory = () => {
    const { elements, names } = generateTreeWithNodes()

    const schema = getLength(elements)

    cy.wrap({ schema, names }).as('node-schema')

    mount(<Tree data-cy='tree-container' nodes={elements} />)
}
