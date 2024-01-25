import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import { Fab } from '.'

export default {
    title: 'DataDisplay/Fab',
    component: Fab
} as Meta<typeof Fab>

const Template: StoryFn<typeof Fab> = args => <Fab {...args} />

export const Default = Template.bind({})

Default.args = {
    children: 'Fab'
}
