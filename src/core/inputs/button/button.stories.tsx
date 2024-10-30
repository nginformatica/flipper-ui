import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Button from '.'

const meta: Meta<typeof Button> = {
    title: 'Inputs/Button',
    component: Button,
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
            description:
                'The button size. Must be ' +
                '`small | medium | large`. ' +
                'If not set, the default is "medium"'
        },
        color: {
            options: ['default', 'primary', 'secondary', 'error'],
            control: { type: 'radio' },
            description:
                'The button color. Must be ' +
                '`default | primary | secondary | error`. ' +
                'If not set, the default is "primary"'
        },
        variant: {
            options: ['text', 'outlined', 'contained'],
            control: { type: 'radio' },
            description:
                'The button variant. Must be ' +
                '`text | outlined | contained`. ' +
                'If not set, the default is "indeterminate"'
        },
        dashed: {
            control: 'boolean',
            description: 'To set the dashed style on the button'
        },
        disabled: {
            control: 'boolean',
            description: 'To set the disabled state on the button'
        },
        margin: {
            control: 'text',
            description: 'The button margin'
        },
        padding: {
            control: 'text',
            description: 'The button padding'
        },
        style: {
            control: 'object',
            description: 'The button style'
        }
    }
}

export default meta

type Story = StoryObj<typeof Button>

export const button: Story = {
    render: ({ ...args }) => {
        return <Button {...args}>This is a Button!</Button>
    },
    args: {
        size: 'medium',
        color: 'primary',
        variant: 'contained',
        dashed: false,
        disabled: false,
        margin: '',
        padding: '',
        style: {}
    }
}
