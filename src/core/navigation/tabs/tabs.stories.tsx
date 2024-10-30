import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Tab from '@/core/navigation/tab'
import Tabs from '.'

const meta: Meta<typeof Tabs> = {
    title: 'Navigation/Tabs',
    component: Tabs,
    argTypes: {
        value: {
            control: 'number',
            description: 'The current tab active'
        },
        centered: {
            control: 'boolean',
            description: 'The tabs position'
        },
        variant: {
            options: ['standard', 'scrollable', 'fullWidth'],
            control: { type: 'radio' },
            description:
                'The tabs variant. ' +
                'Must be `standard | scrollable | fullWidth`. ' +
                'If not set, the default is "standard"'
        },
        indicatorColor: {
            options: ['primary', 'secondary'],
            control: { type: 'radio' },
            description:
                'The tabs color. ' +
                'Must be `primary | secondary`. ' +
                'If not set, the default is "primary"'
        },
        textColor: {
            options: ['primary', 'secondary', 'inherit'],
            control: { type: 'radio' },
            description:
                'The tabs text color. ' +
                'Must be `primary | secondary | inherit`. ' +
                'If not set, the default is "primary"'
        },
        children: {
            control: false,
            description: 'The tabs content'
        },
        margin: {
            control: 'text',
            description: 'The tabs margin'
        },
        padding: {
            control: 'text',
            description: 'The tabs padding'
        },
        style: {
            control: 'object',
            description: 'The tabs style'
        }
    }
}

export default meta

type Story = StoryObj<typeof Tabs>

export const tabs: Story = {
    render: ({ ...args }) => {
        return <Tabs {...args} />
    },
    args: {
        value: 0,
        centered: true,
        variant: 'standard',
        indicatorColor: 'primary',
        textColor: 'primary',
        children: [
            <Tab label='Profile' key='1' />,
            <Tab label='Enterprise' key='2' />,
            <Tab label='Billing' key='3' />
        ],
        margin: '',
        padding: '',
        style: {}
    }
}
