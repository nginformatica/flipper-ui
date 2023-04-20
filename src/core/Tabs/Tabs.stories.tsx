import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Tabs from '.'
import Tab from '../Tab'

export default {
    title: 'Tabs',
    component: Tabs
} as Meta<typeof Tabs>

const Template: StoryFn<typeof Tabs> = args => <Tabs {...args} />

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
