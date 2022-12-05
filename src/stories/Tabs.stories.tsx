import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Tabs from '../core/Tabs'
import Tab from '../core/Tab'

export default {
    title: 'Tabs',
    component: Tabs
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = args => <Tabs {...args} />

export const Default = Template.bind({})
Default.args = {
    value: 0,
    children: (
        <>
            <Tab label='Profile' />
            <Tab label='Enterprise' />
            <Tab label='Billing' />
        </>
    )
}
