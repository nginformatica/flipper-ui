import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Advertise from '.'

const meta: Meta<typeof Advertise> = {
    title: 'DataDisplay/Advertise',
    component: Advertise,
    argTypes: {
        comment: {
            control: 'text',
            description: 'The Avertise upper text'
        },
        author: {
            control: 'text',
            description: 'The Advertise bottom text'
        },
        commentStyle: {
            control: 'object',
            description: 'The Advertise comment style'
        },
        authorStyle: {
            control: 'object',
            description: 'The Advertise author style'
        },
        style: {
            control: 'object',
            description: 'The Advertise Container style'
        },
        padding: {
            control: 'text',
            description: 'The Advertise Container padding'
        },
        margin: {
            control: 'text',
            description: 'The Advertise Container margin'
        }
    }
}

export default meta

type Story = StoryObj<typeof Advertise>

export const advertise: Story = {
    render: ({ ...args }) => {
        return <Advertise {...args} />
    },
    args: {
        comment:
            'Be like water. You put water into a cup. \
        It becomes the cup. You put water into a bottle. It becomes the bottle.',
        author: 'Bruce Lee',
        commentStyle: { color: '#000000' },
        authorStyle: { color: '#000000' },
        style: { backgroundColor: '#FFFFFF' },
        margin: '0px',
        padding: '0px'
    }
}
