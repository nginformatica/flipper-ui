import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Grow from '.'

const meta: Meta<typeof Grow> = {
    title: 'Feedback/Grow',
    component: Grow,
    argTypes: {
        in: {
            control: 'boolean',
            description: 'To open or close the grow'
        },
        timeout: {
            control: 'object',
            description:
                'The grow timeout. ' +
                'Can be a `number`, `auto`, or set the object individually `{ enter: 200, exit: 500 }`'
        },
        margin: {
            control: 'text',
            description: 'The grow margin'
        },
        padding: {
            control: 'text',
            description: 'The grow padding'
        },
        style: {
            control: 'object',
            description: 'The grow style'
        }
    }
} as Meta<typeof Grow>

export default meta

type Story = StoryObj<typeof Grow>

export const grow: Story = {
    render: ({ ...args }) => {
        return (
            <Grow {...args} in={args.in}>
                <span>I am open for discussions</span>
            </Grow>
        )
    },
    args: {
        in: true,
        timeout: { enter: 200, exit: 500 },
        margin: '0px',
        padding: '0px',
        style: {}
    }
}
