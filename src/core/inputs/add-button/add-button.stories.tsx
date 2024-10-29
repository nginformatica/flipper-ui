import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import AddButton from '.'

const meta: Meta<typeof AddButton> = {
    title: 'Inputs/Add Button',
    component: AddButton,
    argTypes: {
        onClick: {
            table: {
                disable: true
            }
        },
        name: {
            control: 'text',
            description: 'The button name'
        },
        label: {
            control: 'text',
            description: 'The button label'
        },
        fullWidth: {
            control: 'boolean',
            description: 'To set if the button is full container width'
        },
        padding: {
            control: 'text',
            description: 'The button padding'
        },
        margin: {
            control: 'text',
            description: 'The button margin'
        },
        disabled: {
            control: 'boolean',
            description: 'To set if the button is disabled'
        }
    }
}

export default meta

type Story = StoryObj<typeof AddButton>

export const addButton: Story = {
    render: ({ ...args }) => {
        return <AddButton {...args} />
    },
    args: {
        name: 'AddFoo',
        label: 'Nova Filial',
        fullWidth: true,
        padding: '',
        margin: '',
        disabled: false
    }
}
