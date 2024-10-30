import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Skeleton from '.'

const meta: Meta<typeof Skeleton> = {
    title: 'Feedback/Skeleton',
    component: Skeleton,
    argTypes: {
        circle: {
            control: 'boolean',
            description: 'The skeleton format'
        },
        width: {
            control: 'number',
            description: 'The skeleton width'
        },
        height: {
            control: 'number',
            description: 'The skeleton height'
        }
    }
}

export default meta

type Story = StoryObj<typeof Skeleton>

export const skeleton: Story = {
    render: ({ ...args }) => {
        return <Skeleton {...args} />
    },
    args: {
        circle: true,
        width: 64,
        height: 64
    }
}
