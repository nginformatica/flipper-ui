import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import Button from '.'
import { Add as IconAdd } from '@/icons'

export default {
    title: 'Inputs/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = args => <Button {...args} />

const commonArgs = {
    margin: 12,
    children: 'Button'
}

export const Default = Template.bind({})
Default.args = {
    ...commonArgs
}

export const Primary = Template.bind({})
Primary.args = {
    ...commonArgs,
    color: 'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
    ...commonArgs,
    color: 'secondary'
}

export const ContainedPrimary = Template.bind({})
ContainedPrimary.args = {
    ...commonArgs,
    variant: 'contained',
    color: 'primary'
}

export const ContainedSecondary = Template.bind({})
ContainedSecondary.args = {
    ...commonArgs,
    variant: 'contained',
    color: 'secondary'
}

export const OutlinedPrimary = Template.bind({})
OutlinedPrimary.args = {
    ...commonArgs,
    variant: 'outlined',
    color: 'primary'
}

export const OutlinedSecondary = Template.bind({})
OutlinedSecondary.args = {
    ...commonArgs,
    variant: 'outlined',
    color: 'secondary'
}

export const Selected = Template.bind({})
Selected.args = {
    ...commonArgs,
    variant: 'contained',
    color: 'primary',
    selected: true
}

export const DashedPrimary = Template.bind({})
DashedPrimary.args = {
    ...commonArgs,
    variant: 'dashed',
    color: 'primary'
}

export const DashedSecondary = Template.bind({})
DashedSecondary.args = {
    ...commonArgs,
    variant: 'dashed',
    color: 'secondary'
}

export const AddIcon = Template.bind({})
AddIcon.args = {
    variant: 'fab',
    color: 'primary',
    margin: 12,
    children: <IconAdd />
}

export const Small = Template.bind({})
Small.args = {
    ...commonArgs,
    size: 'small',
    variant: 'contained',
    color: 'primary'
}

export const Medium = Template.bind({})
Medium.args = {
    ...commonArgs,
    size: 'medium',
    variant: 'contained',
    color: 'primary'
}

export const Large = Template.bind({})
Large.args = {
    ...commonArgs,
    size: 'large',
    variant: 'contained',
    color: 'primary'
}

export const Disabled = Template.bind({})
Disabled.args = {
    ...commonArgs,
    variant: 'contained',
    color: 'primary',
    disabled: true
}
