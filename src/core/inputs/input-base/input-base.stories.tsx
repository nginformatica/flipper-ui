import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import InputBase from '.'

export default {
    title: 'Inputs/InputBase',
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
} as Meta<typeof InputBase>

const Template: StoryFn<typeof InputBase> = args => <InputBase {...args} />

export const Default = Template.bind({})

Default.args = {
    placeholder: 'InputBase'
}
