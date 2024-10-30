import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Box from '.'

const meta: Meta<typeof Box> = {
    title: 'Surfaces/Box',
    component: Box,
    argTypes: {
        children: {
            control: 'text',
            description: 'The box content'
        },
        margin: {
            control: 'text',
            description: 'The box margin'
        },
        padding: {
            control: 'text',
            description: 'The box padding'
        },
        style: {
            control: 'object',
            description: 'The box style'
        }
    }
}

export default meta

type Story = StoryObj<typeof Box>

export const box: Story = {
    render: ({ ...args }) => {
        return <Box {...args} />
    },
    args: {
        children: 'Open the box and think outside of it.',
        margin: '25px',
        padding: '',
        style: {}
    }
}
