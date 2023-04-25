import React from 'react'
import VisibilityIcon from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
    title: 'experimental/VisibilityIcon',
    component: VisibilityIcon,
    args: {
        show: false,
        name: 'show'
    }
} as Meta<typeof VisibilityIcon>

const Template: StoryFn<typeof VisibilityIcon> = args => (
    <VisibilityIcon {...args} />
)

export const Default = Template.bind({})
