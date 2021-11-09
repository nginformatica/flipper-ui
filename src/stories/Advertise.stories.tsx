import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Advertise from '../core/Advertise'

export default {
    title: 'Advertise',
    component: Advertise
} as ComponentMeta<typeof Advertise>

const Template: ComponentStory<typeof Advertise> = args => (
    <Advertise { ...args } />
)

export const Default = Template.bind({})

Default.args = {
    comment:
        'Be like water. You put water into a cup. \
        It becomes the cup. You put water into a bottle. It becomes the bottle.',
    author: 'Bruce Lee',
    children: 'Advertise'
}
