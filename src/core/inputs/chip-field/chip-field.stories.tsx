import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import ChipField from '.'

const meta: Meta<typeof ChipField> = {
    title: 'Inputs/Chip Field',
    component: ChipField,
    argTypes: {
        label: {
            control: 'text',
            description: 'The label of the input'
        },
        list: {
            control: false,
            description: 'The list of chips on the input'
        },
        error: {
            control: 'boolean',
            description: 'The input error state'
        },
        disabled: {
            control: 'boolean',
            description: 'The input disabled state'
        },
        onChange: {
            control: false,
            description: 'The onChange function, must be `() => void`'
        }
    }
}

export default meta

type Story = StoryObj<typeof ChipField>

export const chipField: Story = {
    render: ({ ...args }) => {
        return <ChipField {...args} />
    },
    args: {
        label: 'Emails *',
        list: [
            { value: 'email@1.com', label: 'email@1.com' },
            { value: 'email@2.com', label: 'email@2.com' }
        ],
        error: false,
        disabled: false,
        onChange: () => null
    }
}
