import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Fab from '../core/Fab'

export default {
    title: 'Fab',
    component: Fab
} as ComponentMeta<typeof Fab>

const Template: ComponentStory<typeof Fab> = args => <Fab {...args} />
export const Default = Template.bind({})

Default.args = {
    children: 'Fab'
}
