import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Container from '.'

export default {
    title: 'Container',
    component: Container
} as Meta<typeof Container>

const Template: StoryFn<typeof Container> = args => <Container {...args} />

export const Default = Template.bind({})
Default.args = {
    children: 'I am a Container'
}
