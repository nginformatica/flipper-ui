import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import Progress from '.'
import { theme } from '@/theme'

export default {
    title: 'Feedback/Progress',
    component: Progress
} as Meta<typeof Progress>

const Template: StoryFn<typeof Progress> = args => <Progress {...args} />

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

export const LinearWithCustom = Template.bind({})
LinearWithCustom.args = {
    linear: true,
    size: '100px',
    variant: 'determinate',
    value: 75,
    valueBuffer: 100,
    primaryColor: `${theme.colors.graphic.red.main}80`,
    barPrimaryColor: theme.colors.graphic.red.main
}
