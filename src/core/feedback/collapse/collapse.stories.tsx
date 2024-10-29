import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Collapse from '.'

const meta: Meta<typeof Collapse> = {
    title: 'Feedback/Collapse',
    component: Collapse,
    argTypes: {
        in: {
            control: 'boolean',
            description: 'To open or close the collapse'
        },
        timeout: {
            control: 'object',
            description:
                'The collapse timeout. ' +
                'Can be a `number`, `auto`, or set the object individually `{ enter: 200, exit: 500 }`'
        },
        children: {
            control: 'text',
            description: 'The collapse content'
        },
        margin: {
            control: 'text',
            description: 'The collapse margin'
        },
        padding: {
            control: 'text',
            description: 'The collapse padding'
        },
        style: {
            control: 'object',
            description: 'The collapse style'
        }
    }
}

export default meta

type Story = StoryObj<typeof Collapse>

export const collapse: Story = {
    render: ({ ...args }) => {
        return <Collapse {...args} />
    },
    args: {
        in: true,
        timeout: { enter: 200, exit: 500 },
        children: 'I am open for discussions.',
        margin: '0px',
        padding: '0px',
        style: {}
    }
}
