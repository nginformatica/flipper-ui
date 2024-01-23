import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import { Actions } from '.'

export default {
    title: 'Experimental/Actions',
    component: Actions
} as Meta<typeof Actions>

const Template: StoryFn<typeof Actions> = args => {
    return <Actions {...args} />
}

export const Default = Template.bind({})
