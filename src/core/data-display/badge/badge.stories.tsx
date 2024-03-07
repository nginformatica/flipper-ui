import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import Button from '@/core/inputs/button'
import Badge from '.'

export default {
    title: 'DataDisplay/Badge',
    component: Badge,
    argTypes: {
        backgroundColor: { control: 'color' },
        counter: { control: 'number' }
    }
} as Meta<typeof Badge>

const Template: StoryFn<typeof Badge> = args => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {
    counter: 2,
    children: 'Badge'
}

export const Primary = Template.bind({})
Primary.args = {
    counter: 2,
    color: 'primary',
    children: 'Badge'
}

export const Secondary = Template.bind({})
Secondary.args = {
    counter: 150,
    color: 'secondary',
    children: (
        <Button variant='outlined'>Try changing the counter to Zero</Button>
    )
}

export const WithDot = Template.bind({})
WithDot.args = {
    counter: 1,
    variant: 'dot',
    color: 'primary',
    children: 'Badge'
}
