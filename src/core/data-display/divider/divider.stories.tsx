import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import List from '@/core/data-display/list'
import ListItem from '@/core/data-display/list-item'
import Divider from '.'

const meta: Meta<typeof Divider> = {
    title: 'DataDisplay/Divider',
    component: Divider,
    argTypes: {
        margin: {
            control: 'text',
            description: 'The divider margin.'
        },
        padding: {
            control: 'text',
            description: 'The divider padding.'
        },
        style: {
            control: 'object',
            description: 'The divider style.'
        }
    }
}

export default meta

type Story = StoryObj<typeof Divider>

export const divider: Story = {
    render: ({ ...args }) => {
        return (
            <List>
                <ListItem>
                    <p>Banded penguin</p>
                </ListItem>
                <Divider {...args} />
                <ListItem>
                    <p>Chinstrap penguin</p>
                </ListItem>
                <Divider {...args} />
                <ListItem>
                    <p>Crested penguins</p>
                </ListItem>
                <Divider {...args} />
            </List>
        )
    },
    args: {
        margin: '',
        padding: '',
        style: {}
    }
}
