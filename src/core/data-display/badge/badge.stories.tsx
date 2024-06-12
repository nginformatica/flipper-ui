import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Badge from '.'

const meta: Meta<typeof Badge> = {
    title: 'DataDisplay/Badge',
    component: Badge,
    argTypes: {
        counter: {
            control: 'number',
            description:
                'The counter number. If is set to "0", the badge doesn"t render'
        },
        color: {
            options: [
                'default',
                'primary',
                'secondary',
                'error',
                'info',
                'success',
                'warning'
            ],
            control: { type: 'radio' },
            description:
                'The badge color. ' +
                'Must be `"default" | "primary" | "secondary" | "error" | "info" | "success" | "warning"`' +
                'If not set, the default is "default"'
        },
        vertical: {
            options: ['top', 'bottom'],
            control: { type: 'radio' },
            description:
                'The badge vertical position. ' +
                'Must be `"top" | "bottom"`' +
                'If not set, the default is "top"'
        },
        horizontal: {
            options: ['right', 'left'],
            control: { type: 'radio' },
            description:
                'The badge overlap. ' +
                'Must be `"right" | "left"`' +
                'If not set, the default is "right"'
        },
        variant: {
            options: ['standard', 'dot'],
            control: { type: 'radio' },
            description:
                'The badge variant. ' +
                'Must be `"standard" | "dot"`' +
                'If not set, the default is "standard"'
        },
        overlap: {
            options: ['rectangular', 'circular'],
            control: { type: 'radio' },
            description:
                'The badge overlap. ' +
                'Must be `"rectangular" | "circular"`' +
                'If not set, the default is "rectangular"'
        },
        margin: {
            control: 'text',
            description: 'The badge margin'
        },
        padding: {
            control: 'text',
            description: 'The badge padding'
        }
    }
}

export default meta

type Story = StoryObj<typeof Badge>

export const actions: Story = {
    render: ({ ...args }) => {
        return <Badge {...args}>Badge</Badge>
    },
    args: {
        counter: 10,
        color: 'primary',
        vertical: 'top',
        horizontal: 'right',
        variant: 'standard',
        overlap: 'rectangular',
        margin: '',
        padding: ''
    }
}
