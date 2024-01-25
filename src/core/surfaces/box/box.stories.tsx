import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import { Box } from '.'

export default {
    title: 'Surfaces/Box',
    component: Box
} as Meta<typeof Box>

const Template: StoryFn<typeof Box> = args => <Box {...args} />

export const Default = Template.bind({})

Default.args = {
    margin: 25,
    children: 'Open the box and think outside of it.'
}
