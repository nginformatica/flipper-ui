import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import Tab from '@/core/navigation/tab'
import Tabs from '.'

export default {
    title: 'Navigation/Tabs',
    component: Tabs
} as Meta<typeof Tabs>

const Template: StoryFn<typeof Tabs> = args => <Tabs {...args} />

export const Default = Template.bind({})
Default.args = {
    value: 0,
    children: [
        <Tab label='Profile' key='1' />,
        <Tab label='Enterprise' key='2' />,
        <Tab label='Billing' key='3' />
    ]
}
