import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import InputAdornment from '.'

const meta: Meta<typeof InputAdornment> = {
    title: 'Inputs/InputAdornment',
    component: InputAdornment,
    argTypes: {
        position: {
            options: ['start', 'end'],
            control: { type: 'radio' },
            description:
                'The adornment position. Must be ' +
                '`start | end | large`. ' +
                'If not set, the default is "start"'
        },
        children: {
            control: 'text',
            description: 'The adornment content. Can be text or an icon'
        },
        margin: {
            control: 'text',
            description: 'The adornment margin'
        },
        padding: {
            control: 'text',
            description: 'The adornment padding'
        },
        style: {
            control: 'object',
            description: 'The adornment style'
        }
    }
}

export default meta

type Story = StoryObj<typeof InputAdornment>

export const inputAdornment: Story = {
    render: ({ ...args }) => {
        return <InputAdornment {...args} />
    },
    args: {
        children: '$',
        position: 'start',
        margin: '',
        padding: '',
        style: {}
    }
}
