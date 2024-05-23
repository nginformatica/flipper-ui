import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import PasswordVisibility from '.'

const meta: Meta<typeof PasswordVisibility> = {
    title: 'Experimental/Password Visibility',
    component: PasswordVisibility,
    argTypes: {
        name: {
            control: 'text',
            description: 'The visibility icon name'
        },
        show: {
            control: 'boolean',
            description: 'If `true` the visibility icon is shown.'
        },
        onToggle: {
            control: false,
            description: 'To set the state logic to show the icon.'
        }
    }
}

export default meta

type Story = StoryObj<typeof PasswordVisibility>

export const passwordVisibility: Story = {
    render: ({ ...args }) => {
        return <PasswordVisibility {...args} />
    },
    args: { name: 'show', show: true, onToggle: () => alert('Toggle me!') }
}
