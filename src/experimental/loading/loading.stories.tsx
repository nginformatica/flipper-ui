import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import Loading from '.'

export default {
    title: 'Experimental/Loading',
    component: Loading
} as Meta<typeof Loading>

const Template: StoryFn<typeof Loading> = args => <Loading {...args} />

export const Default = Template.bind({})

export const CustomSize = Template.bind({})
CustomSize.args = {
    size: 32
}

export const CustomMargin = Template.bind({})
CustomMargin.args = {
    margin: 32
}
