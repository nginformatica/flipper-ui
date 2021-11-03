import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Radio from '../core/Radio'

export default {
    title: 'Radio',
    component: Radio
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = args => <Radio { ...args } />

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
