import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Checkbox from '.'

export default {
    title: 'Checkbox',
    component: Checkbox,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as Meta<typeof Checkbox>

const Template: StoryFn<typeof Checkbox> = args => <Checkbox {...args} />

export const Default = () => (
    <Checkbox
        label='I agree with the terms'
        name='terms'
        onChange={() => alert('You clicked on the checkbox!')}
    />
)

export const WithHelper = Template.bind({})
WithHelper.args = {
    label: 'I agree with the terms',
    name: 'terms',
    onChange: () => alert('You clicked on the checkbox!'),
    onHelperClick: () => alert('Do you need help?'),
    children: 'Checkbox'
}

export const Primary = Template.bind({})
Primary.args = {
    label: 'I agree with the terms',
    name: 'terms',
    onChange: () => alert('You clicked on the checkbox!'),
    color: 'primary',
    children: 'Checkbox'
}

export const WithoutLabel = Template.bind({})
WithoutLabel.args = {
    name: 'terms',
    onChange: () => alert('You clicked on the checkbox!'),
    children: 'Checkbox'
}

export const Switch = Template.bind({})
Switch.args = {
    label: 'Bluetooth',
    name: 'bluetooth',
    type: 'switch',
    onChange: () => alert('You clicked on the switcher!'),
    children: 'Checkbox'
}

export const SwitchWithHelper = Template.bind({})
SwitchWithHelper.args = {
    id: 'with-helper',
    label: 'Bluetooth',
    name: 'bluetooth',
    type: 'switch',
    onChange: () => alert('You clicked on the switcher!'),
    onHelperClick: () => alert('Do you need help?'),
    children: 'Checkbox'
}
