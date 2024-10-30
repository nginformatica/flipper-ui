import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Paper from '.'

const meta: Meta<typeof Paper> = {
    title: 'Surfaces/Paper',
    component: Paper,
    argTypes: {
        children: {
            control: 'text',
            description: 'The paper children'
        },
        square: {
            control: 'boolean',
            description: 'The paper format'
        },
        elevation: {
            control: 'number',
            description: 'The paper elevation'
        },
        margin: {
            control: 'text',
            description: 'The paper margin'
        },
        padding: {
            control: 'text',
            description: 'The paper margin'
        }
    }
}

export default meta

type Story = StoryObj<typeof Paper>

export const paper: Story = {
    render: ({ ...args }) => {
        return <Paper {...args} />
    },
    args: {
        children: 'I am a Paper',
        square: false,
        elevation: 4,
        padding: '24px',
        margin: '24px'
    }
}
