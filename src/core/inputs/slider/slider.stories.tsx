import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import Slider from '.'

export default {
    title: 'Inputs/Slider',
    component: Slider
} as Meta<typeof Slider>

const Template: StoryFn<typeof Slider> = args => <Slider {...args} />

export const Default = () => <Slider />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Slider'
}

export const Secondary = Template.bind({})
Secondary.args = {
    color: 'secondary',
    children: 'Slider'
}

export const Ranged = Template.bind({})
Ranged.args = {
    value: [20, 50],
    children: 'Slider'
}

export const FixedLabel = Template.bind({})
FixedLabel.args = {
    color: 'error',
    valueLabelDisplay: 'on',
    value: [20, 50],
    children: 'Slider'
}

export const WithMarks = Template.bind({})
WithMarks.args = {
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
    valueLabelDisplay: 'auto',
    value: [20, 75],
    children: 'Slider'
}
