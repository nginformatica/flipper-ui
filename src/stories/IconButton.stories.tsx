import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import IconButton from '../core/IconButton'
import { Add as IconAdd } from '../icons'

export default {
    title: 'IconButton',
    component: IconButton
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = args => (
    <IconButton { ...args } />
)

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
