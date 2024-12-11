import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { IconStar } from '@/icons/mui-icons'
import Stepper from '.'

const meta: Meta<typeof Stepper> = {
    title: 'Navigation/Stepper',
    component: Stepper,
    argTypes: {
        active: {
            control: 'number',
            description: 'The active step'
        },
        bottomLabel: {
            control: 'boolean',
            description: 'The position of the step label'
        },
        orientation: {
            options: ['horizontal', 'vertical'],
            control: { type: 'radio' },
            description:
                'The step orientation. ' +
                'Must be `horizontal | vertical`. ' +
                'If not set, the default is "horizontal"'
        },
        steps: {
            control: false,
            description: 'The steps content'
        },
        margin: {
            control: 'text',
            description: 'The stepper margin'
        },
        padding: {
            control: 'text',
            description: 'The stepper padding'
        },
        style: {
            control: 'object',
            description: 'The stepper style'
        }
    }
}

export default meta

type Story = StoryObj<typeof Stepper>

export const stepper: Story = {
    render: ({ ...args }) => {
        return <Stepper {...args} />
    },
    args: {
        active: 2,
        bottomLabel: false,
        orientation: 'horizontal',
        steps: ['Name', 'Email', 'Password', 'Photo', 'Be happy!'],
        margin: '',
        padding: '',
        style: {}
    }
}

export const stepperWithIcon: Story = {
    render: ({ ...args }) => {
        return <Stepper {...args} />
    },
    args: {
        active: 1,
        bottomLabel: true,
        orientation: 'horizontal',
        steps: [
            { label: 'Start', icon: <IconStar /> },
            { label: 'You are here!', icon: <IconStar /> },
            { label: 'Finish', icon: <IconStar /> }
        ],
        margin: '',
        padding: '',
        style: {}
    }
}
