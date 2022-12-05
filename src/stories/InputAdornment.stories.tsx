import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import InputAdornment from '../core/InputAdornment'

export default {
    title: 'InputAdornment',
    component: InputAdornment
} as ComponentMeta<typeof InputAdornment>

const Template: ComponentStory<typeof InputAdornment> = args => (
    <InputAdornment {...args} />
)
export const Default = Template.bind({})

Default.args = {
    children: 'InputAdornment'
}
