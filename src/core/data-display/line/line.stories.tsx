import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Line from '.'

const meta: Meta<typeof Line> = {
    title: 'DataDisplay/Line',
    component: Line,
    argTypes: {
        primary: {
            control: 'boolean',
            description: 'To set the line border color'
        },
        margin: {
            control: 'text',
            description: 'The line margin'
        },
        padding: {
            control: 'text',
            description: 'The line padding'
        },
        style: {
            control: 'object',
            description: 'The line style'
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
        primary: false,
        margin: '0px',
        padding: '0px',
        style: {}
    }
}
