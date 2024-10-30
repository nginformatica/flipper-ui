import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Header from '.'
import { StoriesWrapper } from './styles'

const meta: Meta<typeof Header> = {
    title: 'Surfaces/Header',
    component: Header,
    argTypes: {
        children: {
            control: 'text',
            description: 'The header content'
        },
        color: {
            options: ['default', 'primary', 'secondary', 'inherit'],
            control: { type: 'radio' },
            description:
                'The header background color. Must be ' +
                '`default | primary | secondary | inherit`. ' +
                'If not set, the default is "default"'
        },
        margin: {
            control: 'text',
            description: 'The header margin'
        },
        padding: {
            control: 'text',
            description: 'The header padding'
        },
        style: {
            control: 'object',
            description: 'The header style'
        }
    }
}

export default meta

type Story = StoryObj<typeof Header>

export const header: Story = {
    render: ({ ...args }) => {
        return (
            <StoriesWrapper>
                <Header {...args} />
            </StoriesWrapper>
        )
    },
    args: {
        children: 'Flipper UI',
        color: 'default',
        margin: '',
        padding: '',
        style: {}
    }
}
