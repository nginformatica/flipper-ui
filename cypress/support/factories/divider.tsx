import React from 'react'
import { mount } from 'cypress/react'
import { List, ListItem, Divider } from '../../../src'

export const DividerFactory = () => {
    mount(
        <List>
            <ListItem>
                <p>Banded penguin</p>
            </ListItem>
            <Divider />
            <ListItem>
                <p>Chinstrap penguin</p>
            </ListItem>
        </List>
    )
}
