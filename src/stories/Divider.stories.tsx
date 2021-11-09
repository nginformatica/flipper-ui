import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Divider from '../core/Divider'
import List from '../core/List'
import ListItem from '../core/ListItem'

export default {
    title: 'Divider',
    component: Divider
} as ComponentMeta<typeof Divider>

export const Default = () => (
    <List>
        <ListItem>
            <p>Banded penguin</p>
        </ListItem>
        <Divider />
        <ListItem>
            <p>Chinstrap penguin</p>
        </ListItem>
        <Divider />
        <ListItem>
            <p>Crested penguins</p>
        </ListItem>
        <Divider />
    </List>
)

export const WithDisabledFields = () => (
    <List>
        <ListItem>
            <p>Banded penguin</p>
        </ListItem>
        <Divider />
        <ListItem disabled>
            <p>Chinstrap penguin</p>
        </ListItem>
        <Divider />
        <ListItem disabled>
            <p>Crested penguins</p>
        </ListItem>
        <Divider />
    </List>
)

export const WithSelectedFields = () => (
    <List>
        <ListItem selected>
            <p>Banded penguin</p>
        </ListItem>
        <Divider />
        <ListItem>
            <p>Chinstrap penguin</p>
        </ListItem>
        <Divider />
        <ListItem>
            <p>Crested penguins</p>
        </ListItem>
        <Divider />
    </List>
)
