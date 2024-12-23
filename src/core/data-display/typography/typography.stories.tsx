import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Typography from '.'

const meta: Meta<typeof Typography> = {
    title: 'DataDisplay/Typography',
    component: Typography,
    argTypes: {
        children: {
            control: 'text',
            description: 'The content'
        },
        variant: {
            options: [
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'subtitle1',
                'subtitle2',
                'body1',
                'body2',
                'caption',
                'button',
                'overline'
            ],
            control: { type: 'radio' },
            description:
                'The variants based on the HTML tags. Must be ' +
                '`h1 | h2 | h3 | h4 | h5 | h6 | subtitle1 | subtitle2 | body1 | body2`' +
                '`| caption | button | overline`. ' +
                'If not set, the default is "body1"'
        },
        color: {
            options: [
                'default',
                'primary',
                'secondary',
                'error',
                'textPrimary',
                'textSecondary'
            ],
            control: { type: 'radio' },
            description:
                'The text color. Must be ' +
                '`default | primary | secondary | error | textPrimary | textSecondary `. ' +
                'If not set, the default is "default"'
        },
        margin: {
            control: 'text',
            description: 'The text margin'
        },
        padding: {
            control: 'text',
            description: 'The text padding'
        },
        style: {
            control: 'object',
            description: 'The text style'
        }
    }
}

export default meta

type Story = StoryObj<typeof Typography>

export const typography: Story = {
    render: ({ ...args }) => {
        return <Typography {...args} />
    },
    args: {
        children: 'This is a text!',
        variant: 'body1',
        color: 'default',
        margin: '0px',
        padding: '0px',
        style: {}
    }
}
