import React from 'react'
import { mount } from 'cypress/react18'
import { List, ListItem, Divider } from '../../../src'

export const DividerFactory = () => {
    mount(
        <List>
            <ListItem>
                <p>Banded penguin</p>
            </ListItem>
            <Divider data-cy='divider-container' />
            <ListItem>
                <p>Chinstrap penguin</p>
            </ListItem>
        </List>
    )
}
