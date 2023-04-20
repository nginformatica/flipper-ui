import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Advertise from '.'

export default {
    title: 'Advertise',
    component: Advertise
} as Meta<typeof Advertise>

const Template: StoryFn<typeof Advertise> = args => <Advertise {...args} />

export const Default = Template.bind({})

Default.args = {
    comment:
        'Be like water. You put water into a cup. \
        It becomes the cup. You put water into a bottle. It becomes the bottle.',
    author: 'Bruce Lee',
    children: 'Advertise'
}
