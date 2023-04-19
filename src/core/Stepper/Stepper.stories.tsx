import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Stepper from '.'
import { Delete } from '../../icons'

export default {
    title: 'Stepper',
    component: Stepper
} as ComponentMeta<typeof Stepper>

const Template: ComponentStory<typeof Stepper> = args => <Stepper {...args} />

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
