import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import { Avatar } from '.'

const srcImage = 'https://imgflip.com/s/meme/Doge.jpg'

export default {
    title: 'Experimental/Avatar',
    component: Avatar,
    args: {
        name: 'Felipe'
    }
} as Meta<typeof Avatar>

const Template: StoryFn<typeof Avatar> = args => {
    return <Avatar {...args} />
}

export const simpleAvatar = Template.bind({})
simpleAvatar.args = {
    src: srcImage
}

export const withCustomSize = Template.bind({})
withCustomSize.args = {
    src: srcImage,
    style: { width: '64px', height: '64px' }
}

export const withoutImage = Template.bind({})
withoutImage.args = {
    style: { width: '64px', height: '64px' }
}
