import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Chapter from '.'

const meta: Meta<typeof Chapter> = {
    title: 'DataDisplay/Chapter',
    component: Chapter,
    argTypes: {
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
                'The variants based on the HTML tags. ' +
                'Must be ' +
                '`h1 | h2 | h3 | h4 | h5 | h6 | subtitle1 | subtitle2` ' +
                '` | body1 | body2 | caption | button | overline`. ' +
                'If not set, the default is "body1"'
        },
        children: {
            control: 'text',
            description: 'The chapter content'
        },
        style: {
            control: 'object',
            description: 'The chapter container style'
        },
        padding: {
            control: 'text',
            description: 'The chapter container padding'
        },
        margin: {
            control: 'text',
            description: 'The chapter container margin'
        }
    }
}

export default meta

type Story = StoryObj<typeof Chapter>

export const chapter: Story = {
    render: ({ ...args }) => {
        return <Chapter {...args} />
    },
    args: {
        variant: 'body1',
        children: 'Chapter',
        style: {},
        margin: '0px',
        padding: '0px'
    }
}
