import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Content from '.'

export default {
    title: 'Content',
    component: Content
} as ComponentMeta<typeof Content>

const Template: ComponentStory<typeof Content> = args => <Content {...args} />

export const Default = Template.bind({})
Default.args = {
    children: 'I am used to show Content'
}
