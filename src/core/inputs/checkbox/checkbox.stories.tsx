import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Checkbox from '.'

const meta: Meta<typeof Checkbox> = {
    title: 'Inputs/Checkbox',
    component: Checkbox,
    argTypes: {
        name: {
            control: 'text',
            description: 'The component name'
        },
        label: {
            control: 'text',
            description: 'The component label'
        },
        type: {
            options: ['checkbox', 'switch'],
            control: { type: 'radio' },
            description:
                'The component type. Must be ' +
                '`checkbox | switch`. ' +
                'If not set, the default is "checkbox"'
        },
        color: {
            options: ['default', 'primary', 'secondary'],
            control: { type: 'radio' },
            description:
                'The component color. Must be ' +
                '`default | primary | secondary`. ' +
                'If not set, the default is "secondary"'
        },
        disabled: {
            control: 'boolean',
            description: 'To set the disabled state on the component'
        },
        margin: {
            control: 'text',
            description: 'The component margin'
        },
        padding: {
            control: 'text',
            description: 'The component padding'
        },
        style: {
            control: 'object',
            description: 'The component style'
        },
        onHelperClick: {
            control: false,
            description:
                'The onHelperClick function, must be `() => void | boolean`'
        },
        onChange: {
            control: false,
            description: 'The onChange function, must be `() => void`'
        }
    }
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const checkbox: Story = {
    render: ({ ...args }) => {
        return <Checkbox {...args}>Checkbox</Checkbox>
    },
    args: {
        name: 'terms',
        label: 'I agree with the terms',
        color: 'primary',
        type: 'checkbox',
        disabled: false,
        margin: '',
        padding: '',
        style: {},
        onHelperClick: () => alert('Do you need help?'),
        onChange: () => alert('You clicked on the checkbox!')
    }
}
