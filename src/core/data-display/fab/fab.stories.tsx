import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Fab from '.'

const meta: Meta<typeof Fab> = {
    title: 'DataDisplay/Fab',
    component: Fab,
    argTypes: {
        children: {
            control: 'text',
            description: 'The Fab content. Can be a text or icon'
        },
        style: {
            control: 'object',
            description: 'The Fab style'
        },
        padding: {
            control: 'text',
            description: 'The Fab padding'
        },
        margin: {
            control: 'text',
            description: 'The Fab margin'
        },
        onClick: {
            control: false,
            description: 'The function to call when the Fab is clicked'
        }
    }
}

export default meta

type Story = StoryObj<typeof Fab>

export const fab: Story = {
    render: ({ ...args }) => {
        return <Fab {...args} />
    },
    args: {
        children: 'Fab',
        margin: '0px',
        padding: '0px',
        style: { color: '#000000' }
    }
}
