import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Fab from '.'

export default {
    title: 'Fab',
    component: Fab
} as Meta<typeof Fab>

const Template: StoryFn<typeof Fab> = args => <Fab {...args} />
export const Default = Template.bind({})

Default.args = {
    children: 'Fab'
}
