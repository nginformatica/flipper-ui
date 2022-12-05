import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Chapter from '../core/Chapter'

export default {
    title: 'Chapter',
    component: Chapter
} as ComponentMeta<typeof Chapter>

const Template: ComponentStory<typeof Chapter> = args => <Chapter {...args} />

export const Default = Template.bind({})
Default.args = {
    variant: 'body1',
    children: 'Chapter'
}

export const WithCustomStyle = Template.bind({})
WithCustomStyle.args = {
    style: { 'background-color': 'red' },
    variant: 'body1',
    typoStyle: { color: 'blue' },
    children: 'Chapter'
}
