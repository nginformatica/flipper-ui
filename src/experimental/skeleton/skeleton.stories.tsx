import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import { Skeleton } from '.'

export default {
    title: 'Experimental/Skeleton',
    component: Skeleton,
    args: {}
} as Meta<typeof Skeleton>

const Template: StoryFn<typeof Skeleton> = args => <Skeleton {...args} />

export const Default = Template.bind({})
Default.args = {
    width: '100%'
}

export const WithCustomHeight = Template.bind({})
WithCustomHeight.args = {
    width: 64,
    height: 64
}

export const Circle = Template.bind({})
Circle.args = {
    circle: true,
    width: 64,
    height: 64
}
