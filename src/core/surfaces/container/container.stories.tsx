import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import Container from '.'

export default {
    title: 'Surfaces/Container',
    component: Container
} as Meta<typeof Container>

const Template: StoryFn<typeof Container> = args => <Container {...args} />

export const Default = Template.bind({})
Default.args = {
    children: 'I am a Container'
}
