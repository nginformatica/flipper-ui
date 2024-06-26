import React from 'react'
import { Delete } from '@mui/icons-material'
import type { Meta, StoryFn } from '@storybook/react'
import Stepper from '.'

export default {
    title: 'Navigation/Stepper',
    component: Stepper
} as Meta<typeof Stepper>

const Template: StoryFn<typeof Stepper> = args => <Stepper {...args} />

export const Default = Template.bind({})
Default.args = {
    active: 2,
    steps: ['Name', 'Email', 'Password', 'Photo', 'Be happy!'],
    children: 'Stepper'
}

export const WithIcon = Template.bind({})
WithIcon.args = {
    bottomLabel: true,
    active: 1,
    steps: [
        { label: 'Name', icon: <Delete /> },
        { label: 'Name', icon: <Delete /> },
        { label: 'Name', icon: <Delete /> }
    ],
    children: 'Stepper'
}
