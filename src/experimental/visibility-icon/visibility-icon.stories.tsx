import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import { VisibilityIcon } from '.'

export default {
    title: 'Experimental/VisibilityIcon',
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
