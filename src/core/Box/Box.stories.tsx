import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Box from '.'

export default {
    title: 'Box',
    component: Box
} as ComponentMeta<typeof Box>

const Template: ComponentStory<typeof Box> = args => <Box {...args} />

export const Default = Template.bind({})

Default.args = {
    margin: 25,
    children: 'Open the box and think outside of it.'
}
