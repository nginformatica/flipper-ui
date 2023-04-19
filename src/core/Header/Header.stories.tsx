import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Header from '.'

export default {
    title: 'Header',
    component: Header
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = args => <Header {...args} />

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
