import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Advertise from '.'

const meta: Meta<typeof Advertise> = {
    title: 'DataDisplay/Advertise',
    component: Advertise,
    argTypes: {
        comment: {
            control: 'text',
            description: 'The advertise upper text'
        },
        author: {
            control: 'text',
            description: 'The advertise bottom text'
        },
        commentStyle: {
            control: 'object',
            description: 'The advertise comment style'
        },
        authorStyle: {
            control: 'object',
            description: 'The advertise author style'
        },
        style: {
            control: 'object',
            description: 'The advertise container style'
        },
        padding: {
            control: 'text',
            description: 'The advertise container padding'
        },
        margin: {
            control: 'text',
            description: 'The advertise container margin'
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
        commentStyle: {},
        authorStyle: {},
        style: {},
        margin: '0px',
        padding: '0px'
    }
}
