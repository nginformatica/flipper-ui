import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Content from '.'

export default {
    title: 'Content',
    component: Content
} as Meta<typeof Content>

const Template: StoryFn<typeof Content> = args => <Content {...args} />

export const Default = Template.bind({})
Default.args = {
    children: 'I am used to show Content'
}
