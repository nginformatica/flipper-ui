import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Radio from '.'

const meta: Meta<typeof Radio> = {
    title: 'Inputs/Radio',
    component: Radio,
    argTypes: {
        value: {
            control: 'text',
            description: 'The radio value'
        },
        color: {
            options: ['default', 'primary', 'secondary'],
            control: { type: 'radio' },
            description:
                'The radio color. Must be ' +
                '`default | primary | secondary`. ' +
                'If not set, the default is "secondary"'
        },
        checked: {
            control: 'boolean',
            description: 'To set the checked state on the radio'
        },
        disabled: {
            control: 'boolean',
            description: 'To set the disabled state on the radio'
        },
        margin: {
            control: 'text',
            description: 'The radio margin'
        },
        padding: {
            control: 'text',
            description: 'The radio padding'
        },
        style: {
            control: 'object',
            description: 'The radio style'
        },
        onChange: {
            control: false,
            description: 'The onChange function, must be `() => void`'
        }
    }
}

export default meta

type Story = StoryObj<typeof Radio>

export const radio: Story = {
    render: ({ ...args }) => {
        return <Radio {...args} />
    },
    args: {
        value: 'first',
        color: 'secondary',
        checked: true,
        disabled: false,
        margin: '',
        padding: '',
        style: {},
        onChange: () => alert('You clicked on the radio!')
    }
}
