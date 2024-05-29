import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Line from '.'

const meta: Meta<typeof Line> = {
    title: 'DataDisplay/Line',
    component: Line,
    argTypes: {
        margin: {
            control: 'text',
            description: 'The line margin.'
        },
        padding: {
            control: 'text',
            description: 'The line padding.'
        },
        primary: {
            control: 'boolean',
            description: 'To set the line border color.'
        },
        style: {
            control: 'object',
            description: 'The line style.'
        }
    }
}

export default meta

type Story = StoryObj<typeof Line>

export const line: Story = {
    render: ({ ...args }) => {
        return <Line {...args} />
    },
    args: {
        margin: '',
        padding: '',
        primary: false,
        style: {}
    }
}
