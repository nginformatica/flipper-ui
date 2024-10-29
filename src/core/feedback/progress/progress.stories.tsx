import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Progress from '.'
import { theme } from '@/theme'

const { deepOrange } = theme.colors

const meta: Meta<typeof Progress> = {
    title: 'Feedback/Progress',
    component: Progress,
    argTypes: {
        size: {
            control: 'number',
            description: 'The progress size'
        },
        color: {
            options: [
                'default',
                'primary',
                'secondary',
                'error',
                'info',
                'success',
                'warning'
            ],
            control: { type: 'radio' },
            description:
                'The progress color. Must be ' +
                '`default | primary | secondary | error | info | success | warning`. ' +
                'If not set, the default is "primary"'
        },
        variant: {
            options: ['buffer', 'determinate', 'indeterminate', 'query'],
            control: { type: 'radio' },
            description:
                'The progress variant when linear is set to true. ' +
                'Must be `buffer | determinate | indeterminate | query`. ' +
                'When the linear is set to false, the variants are `determinate | indeterminate`. ' +
                'If not set, the default is "indeterminate"'
        },
        value: {
            control: 'number',
            description: 'The progress value'
        },
        valueBuffer: {
            control: 'number',
            description:
                'The progress value buffer. Use with `linear=true` and `variant="buffer" | "determinate"`'
        },
        primaryColor: {
            control: 'color',
            description:
                'The progress primary color. Use with `linear=true` and `variant="determinate"`'
        },
        barPrimaryColor: {
            control: 'color',
            description:
                'The progress primary bar color. Use with `linear=true` and `variant="determinate"`'
        },
        margin: {
            control: 'text',
            description: 'The progress margin'
        },
        padding: {
            control: 'text',
            description: 'The progress padding'
        }
    }
}

export default meta

type Story = StoryObj<typeof Progress>

export const progress: Story = {
    render: ({ ...args }) => {
        return <Progress {...args} />
    },
    args: {
        size: 48,
        color: 'primary',
        variant: 'indeterminate',
        linear: false,
        value: 50,
        valueBuffer: 75,
        margin: '24px',
        padding: '0px'
    }
}

export const progressCustom: Story = {
    render: ({ ...args }) => {
        return <Progress {...args} />
    },
    args: {
        size: 48,
        variant: 'determinate',
        linear: true,
        value: 50,
        valueBuffer: 75,
        primaryColor: `${deepOrange[600]}80`,
        barPrimaryColor: deepOrange[600],
        margin: '24px',
        padding: '0px'
    }
}
