import React from 'react'
import { Add as IconAdd } from '@mui/icons-material'
import type { Meta, StoryObj } from '@storybook/react'
import IconButton from '.'

const meta: Meta<typeof IconButton> = {
    title: 'Inputs/IconButton',
    component: IconButton,
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
            description:
                'The icon button size. Must be ' +
                '`small | medium | large`. ' +
                'If not set, the default is "large"'
        },
        color: {
            options: ['default', 'primary', 'secondary', 'error'],
            control: { type: 'radio' },
            description:
                'The icon button color. Must be ' +
                '`default | primary | secondary | error`. ' +
                'If not set, the default is "default"'
        },
        children: {
            control: false,
            description: 'The icon button content'
        },
        disabled: {
            control: 'boolean',
            description: 'To set the disabled state on the button'
        },
        margin: {
            control: 'text',
            description: 'The icon button margin'
        },
        padding: {
            control: 'text',
            description: 'The icon button padding'
        },
        style: {
            control: 'object',
            description: 'The icon button style'
        }
    }
}

export default meta

type Story = StoryObj<typeof IconButton>

export const iconButton: Story = {
    render: ({ ...args }) => {
        return <IconButton {...args} />
    },
    args: {
        size: 'large',
        color: 'default',
        children: <IconAdd />,
        disabled: false,
        margin: '',
        padding: '',
        style: {}
    }
}
