import React from 'react'
import Button from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
    title: 'experimental/Button',
    component: Button
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = args => {
    return <Button {...args} />
}

export const Default = Template.bind({})
Default.args = {
    name: 'AddFoo',
    label: 'Add Foo'
}
