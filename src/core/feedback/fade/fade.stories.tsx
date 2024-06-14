import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Fade from '.'

const meta: Meta<typeof Fade> = {
    title: 'Feedback/Fade',
    component: Fade,
    argTypes: {
        in: {
            control: 'boolean',
            description: 'To open or close the fade.'
        },
        timeout: {
            control: 'object',
            description:
                'The fade timeout. ' +
                'Can be a `number`, `auto`, or set the object individually `{ enter: 200, exit: 500 }`.'
        },
        margin: {
            control: 'text',
            description: 'The fade margin.'
        },
        padding: {
            control: 'text',
            description: 'The fade padding.'
        },
        style: {
            control: 'object',
            description: 'The fade style.'
        }
    }
}

export default meta

type Story = StoryObj<typeof Fade>

export const fade: Story = {
    render: ({ ...args }) => {
        return (
            <Fade {...args}>
                <span>I am open for discussions</span>
            </Fade>
        )
    },
    args: {
        in: true,
        timeout: { enter: 200, exit: 500 },
        margin: '',
        padding: '',
        style: {}
    }
}
