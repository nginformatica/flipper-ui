import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import Radio from '.'

export default {
    title: 'Inputs/Radio',
    component: Radio
} as Meta<typeof Radio>

const Template: StoryFn<typeof Radio> = args => <Radio {...args} />

const commonArgs = {
    value: 'first',
    children: <Radio />
}

export const Default = Template.bind({})
Default.args = {
    ...commonArgs
}

export const Checked = Template.bind({})
Checked.args = {
    ...commonArgs,
    checked: true
}

export const Primary = Template.bind({})
Primary.args = {
    ...commonArgs,
    color: 'primary'
}

export const PrimaryChecked = Template.bind({})
PrimaryChecked.args = {
    ...commonArgs,
    color: 'primary',
    checked: true
}
