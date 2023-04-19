import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DateTime from '.'

export default {
    title: 'DateTime',
    component: DateTime
} as ComponentMeta<typeof DateTime>

const Template: ComponentStory<typeof DateTime> = args => <DateTime {...args} />

export const Default = Template.bind({})

export const WithTime = Template.bind({})
WithTime.args = {
    type: 'time'
}

export const WithDateTime = Template.bind({})
WithDateTime.args = {
    type: 'datetime'
}
