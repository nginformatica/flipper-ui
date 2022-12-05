import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Avatar from '../core/Avatar'

export default {
    title: 'Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
        children: { control: 'text' }
    }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />

export const Default = Template.bind({})

export const Primary = Template.bind({})
Primary.args = {
    primary: true
}

export const WithChuildren = Template.bind({})
WithChuildren.args = {
    children: 'W',
    primary: true
}
