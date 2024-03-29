import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import { Avatar } from '@/core/data-display/avatar'
import Chip from '.'
import { Face } from '@/icons'

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
    square: true
}

export const WithInitialsAvatar = Template.bind({})
WithInitialsAvatar.args = {
    ...commonArgs,
    avatar: <Avatar>HD</Avatar>
}

export const WithIconAvatar = Template.bind({})
WithIconAvatar.args = {
    ...commonArgs,
    avatar: (
        <Avatar>
            <Face />
        </Avatar>
    )
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
