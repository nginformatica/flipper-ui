import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Avatar from '.'

export default {
    title: 'Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
        children: { control: 'text' }
    }
} as Meta<typeof Avatar>

const Template: StoryFn<typeof Avatar> = args => <Avatar {...args} />

export const Default = Template.bind({})

export const Primary = Template.bind({})
Primary.args = {
    primary: true
}

export const WithChildren = Template.bind({})
WithChildren.args = {
    children: 'W',
    primary: true
}
