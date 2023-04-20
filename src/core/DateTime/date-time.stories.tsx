import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import DateTime from '.'

export default {
    title: 'DateTime',
    component: DateTime
} as Meta<typeof DateTime>

const Template: StoryFn<typeof DateTime> = args => <DateTime {...args} />

export const Default = Template.bind({})

export const WithTime = Template.bind({})
WithTime.args = {
    type: 'time'
}

export const WithDateTime = Template.bind({})
WithDateTime.args = {
    type: 'datetime'
}
