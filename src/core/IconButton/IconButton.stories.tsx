import { Add as IconAdd } from '@/icons'
import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import IconButton from '.'

export default {
    title: 'IconButton',
    component: IconButton
} as Meta<typeof IconButton>

const Template: StoryFn<typeof IconButton> = args => <IconButton {...args} />

export const Default = Template.bind({})
Default.args = {
    children: <IconAdd />
}

export const Primary = Template.bind({})
Primary.args = {
    color: 'primary',
    children: <IconAdd />
}

export const Secondary = Template.bind({})
Secondary.args = {
    color: 'secondary',
    children: <IconAdd />
}

export const Disabled = Template.bind({})
Disabled.args = {
    disabled: true,
    children: <IconAdd />
}
