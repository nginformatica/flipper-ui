import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import InputBase from '../core/InputBase'

export default {
    title: 'InputBase',
    component: InputBase,
    argTypes: {
        placeholder: { control: 'text' },
        value: { control: 'text' },
        fullWidth: { control: 'boolean' },
        autoComplete: { control: 'text' },
        autoFocus: { control: 'boolean' },
        error: { control: 'boolean' },
        inputProps: { control: 'object' },
        readonly: { control: 'boolean' }
    }
} as ComponentMeta<typeof InputBase>

const Template: ComponentStory<typeof InputBase> = args => (
    <InputBase { ...args } />
)
export const Default = Template.bind({})

Default.args = {
    placeholder: 'InputBase'
}
