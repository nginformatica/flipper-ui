import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Slider from '.'

const meta: Meta<typeof Slider> = {
    title: 'Inputs/Slider',
    component: Slider,
    argTypes: {
        color: {
            options: ['default', 'primary', 'secondary', 'error'],
            control: { type: 'radio' },
            description:
                'The slider color. Must be ' +
                '`default | primary | secondary | error`. ' +
                'If not set, the default is "primary"'
        },
        value: {
            odd: {
                control: { type: 'number' }
            },
            description: 'The slider range value'
        },
        valueLabelDisplay: {
            options: ['on', 'off'],
            control: { type: 'radio' },
            description:
                'The slider label. Must be `on | off`. ' +
                'If not set, the default is "off"'
        },
        margin: {
            control: 'text',
            description: 'The slider margin'
        },
        padding: {
            control: 'text',
            description: 'The slider padding'
        },
        style: {
            control: 'object',
            description: 'The slider style'
        }
    }
}

export default meta

type Story = StoryObj<typeof Slider>

export const slider: Story = {
    render: ({ ...args }) => {
        return <Slider {...args} />
    },
    args: {
        color: 'primary',
        value: [20, 50],
        valueLabelDisplay: 'on',
        margin: '',
        padding: '',
        style: {}
    }
}

export const sliderWithMarks: Story = {
    render: ({ ...args }) => {
        return <Slider {...args} />
    },
    args: {
        color: 'primary',
        value: [20, 50],
        valueLabelDisplay: 'auto',
        marks: [
            {
                value: 0,
                label: 'Start'
            },
            {
                value: 50,
                label: 'You are half way'
            },
            {
                value: 100,
                label: 'Finish'
            }
        ],
        margin: '',
        padding: '',
        style: {}
    }
}
