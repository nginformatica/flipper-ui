import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import InputAdornment from '.'

export default {
    title: 'Inputs/InputAdornment',
    component: InputAdornment
} as Meta<typeof InputAdornment>

const Template: StoryFn<typeof InputAdornment> = args => (
    <InputAdornment {...args} />
)
export const Default = Template.bind({})

Default.args = {
    children: 'InputAdornment'
}
