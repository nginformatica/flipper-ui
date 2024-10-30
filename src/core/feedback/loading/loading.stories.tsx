import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Loading from '.'

const meta: Meta<typeof Loading> = {
    title: 'Feedback/Loading',
    component: Loading,
    argTypes: {
        size: {
            control: 'number',
            description: 'The loading size'
        },
        margin: {
            control: 'text',
            description: 'The loading margin'
        },
        padding: {
            control: 'text',
            description: 'The loading padding'
        }
    }
}

export default meta

type Story = StoryObj<typeof Loading>

export const loading: Story = {
    render: ({ ...args }) => {
        return <Loading {...args} />
    },
    args: {
        size: 72,
        margin: '0px',
        padding: '0px'
    }
}
