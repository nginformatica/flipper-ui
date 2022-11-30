import { mount } from 'cypress/react'
import React from 'react'
import { List } from '../../../src'
import { generateListOfSpiedItems } from '../utils/generators'

export const ListFactory = () => {
    const elements = generateListOfSpiedItems()
    mount(<List>{...elements}</List>)
}
