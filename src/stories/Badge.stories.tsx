import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Badge from '../core/Badge'
import Button from '../core/Button'

export default {
    title: 'Badge',
    component: Badge,
    argTypes: {
        backgroundColor: { control: 'color' },
        counter: { control: 'number' }
    }
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = args => <Badge { ...args } />

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
        <Button variant='outlined'>
            Try changing the counter to Zero
        </Button>
    )
}

export const WithDot = Template.bind({})
WithDot.args = {
    counter: 1,
    variant: 'dot',
    color: 'primary',
    children: 'Badge'
}
