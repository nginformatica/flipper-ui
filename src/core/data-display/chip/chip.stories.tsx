import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Avatar from '../avatar'
import Chip from '.'

const meta: Meta<typeof Chip> = {
    title: 'DataDisplay/Chip',
    component: Chip,
    argTypes: {
        label: {
            control: 'text',
            description: 'The chip label'
        },
        square: {
            control: 'boolean',
            description: 'The chip format'
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
                'The chip color. ' +
                'Must be `"default" | "primary" | "secondary" | "error" | "info" | "success" | "warning"`' +
                'If not set, the default is "default"'
        },
        variant: {
            options: ['outlined', 'filled'],
            control: { type: 'radio' },
            description:
                'The chip variant. ' +
                'Must be `"outlined" | "filled"`' +
                'If not set, the default is "filled"'
        },
        size: {
            options: ['small', 'medium'],
            control: { type: 'radio' },
            description:
                'The chip size. ' +
                'Must be `"small" | "medium"`' +
                'If not set, the default is "medium"'
        },
        margin: {
            control: 'text',
            description: 'The badge margin'
        },
        padding: {
            control: 'text',
            description: 'The badge padding'
        },
        avatar: {
            control: false,
            description: 'The chip Avatar'
        }
    }
}

export default meta

type Story = StoryObj<typeof Chip>

export const chip: Story = {
    render: ({ ...args }) => {
        return <Chip {...args} />
    },
    args: {
        label: 'Hello darkness my old friend',
        square: false,
        color: 'default',
        variant: 'filled',
        size: 'medium',
        margin: '0px',
        padding: '0px',
        avatar: <Avatar name='H' />
    }
}
