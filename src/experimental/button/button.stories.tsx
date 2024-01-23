import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import Button from '.'

export default {
    title: 'Experimental/Button',
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
