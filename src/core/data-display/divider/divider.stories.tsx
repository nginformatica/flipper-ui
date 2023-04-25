import React from 'react'
import { Meta } from '@storybook/react'
import Divider from '.'
import List from '@/core/data-display/list'
import ListItem from '@/core/data-display/list-item'

export default {
    title: 'DataDisplay/Divider',
    component: Divider
} as Meta<typeof Divider>

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
