import React from 'react'
import { Face } from '@mui/icons-material'
import type { Meta, StoryFn } from '@storybook/react'
import Avatar from '../avatar'
import Chip from '.'

export default {
    title: 'DataDisplay/Chip',
    component: Chip
} as Meta<typeof Chip>

const Template: StoryFn<typeof Chip> = args => <Chip {...args} />

const commonArgs = {
    label: 'Hello darkness my old friend'
}

export const Default = Template.bind({})
Default.args = {
    ...commonArgs
}

export const Squared = Template.bind({})
Squared.args = {
    ...commonArgs,
    square: true,
    avatar: <Avatar name='HD' />
}

export const WithInitialsAvatar = Template.bind({})
WithInitialsAvatar.args = {
    ...commonArgs,
    avatar: <Avatar name='HD' />
}

export const WithIconAvatar = Template.bind({})
WithIconAvatar.args = {
    ...commonArgs,
    avatar: <Avatar icon={<Face />} />
}

export const WithImageAvatar = Template.bind({})
WithImageAvatar.args = {
    ...commonArgs,
    avatar: <Avatar src='https://picsum.photos/40' />
}

export const SecondaryColor = Template.bind({})
SecondaryColor.args = {
    ...commonArgs,
    color: 'secondary'
}
