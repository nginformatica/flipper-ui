import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Progress from '../core/Progress'

export default {
    title: 'Progress',
    component: Progress
} as ComponentMeta<typeof Progress>

const Template: ComponentStory<typeof Progress> = args => <Progress {...args} />

const commonArgs = {
    margin: 24,
    children: <Progress />
}

export const Default = Template.bind({})
Default.args = {
    ...commonArgs
}

export const Primary = Template.bind({})
Primary.args = {
    ...commonArgs,
    size: 48,
    color: 'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
    ...commonArgs,
    size: 48,
    color: 'secondary'
}

export const Inherit = Template.bind({})
Inherit.args = {
    ...commonArgs,
    size: 96,
    color: 'inherit'
}

export const Linear = Template.bind({})
Linear.args = {
    ...commonArgs,
    linear: true
}

export const LinearSecondary = Template.bind({})
LinearSecondary.args = {
    ...commonArgs,
    linear: true,
    color: 'secondary'
}

export const LinearBuffer = Template.bind({})
LinearBuffer.args = {
    ...commonArgs,
    variant: 'buffer',
    valueBuffer: 75,
    value: 50,
    linear: true
}

export const LinearQuery = Template.bind({})
LinearQuery.args = {
    ...commonArgs,
    variant: 'query',
    linear: true
}

export const LinearQuerySecondary = Template.bind({})
LinearQuerySecondary.args = {
    ...commonArgs,
    color: 'secondary',
    variant: 'query',
    linear: true
}
