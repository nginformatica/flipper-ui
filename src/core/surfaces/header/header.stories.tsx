import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Header from '.'

export default {
    title: 'Surfaces/Header',
    component: Header
} as Meta<typeof Header>

const Template: StoryFn<typeof Header> = args => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
    color: 'default',
    children: 'Flipper UI'
}

export const Primary = Template.bind({})
Primary.args = {
    color: 'primary',
    children: 'Flipper UI'
}

export const Secondary = Template.bind({})
Secondary.args = {
    color: 'secondary',
    children: 'Flipper UI'
}
