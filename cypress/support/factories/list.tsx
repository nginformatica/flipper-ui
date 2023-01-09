import { mount } from 'cypress/react18'
import React from 'react'
import { List } from '../../../src'
import { generateListOfSpiedItems } from '../utils/generators'

export const ListFactory = () => {
    const elements = generateListOfSpiedItems()
    mount(<List data-cy='list-container'>{...elements}</List>)
}
