import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import { Add as IconAdd } from '@/icons'
import IconButton from '.'

export default {
    title: 'Inputs/IconButton',
    component: IconButton,
    argTypes: {
        'data-testid': {
            table: {
                disable: true
            }
        }
    }
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
