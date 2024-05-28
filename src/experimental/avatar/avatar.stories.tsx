import React from 'react'
import { Face } from '@mui/icons-material'
import type { Meta, StoryObj } from '@storybook/react'
import Avatar from '.'

const srcImage = 'https://imgflip.com/s/meme/Doge.jpg'

const meta: Meta<typeof Avatar> = {
    title: 'Experimental/Avatar',
    component: Avatar,
    argTypes: {
        icon: {
            table: {
                disable: true
            }
        },
        style: {
            control: 'object',
            description: 'The avatar style.'
        }
    }
}

export default meta

type Story = StoryObj<typeof Avatar>

export const avatar: Story = {
    render: ({ ...args }) => {
        return <Avatar {...args} />
    },
    args: {
        name: '',
        src: srcImage
    }
}

export const avatarWithCustomSize: Story = {
    render: ({ ...args }) => {
        return <Avatar {...args} />
    },
    args: {
        name: 'felipe',
        src: '',
        style: { width: '64px', height: '64px' }
    }
}

export const avatarWithoutImage: Story = {
    render: ({ ...args }) => {
        return <Avatar {...args} />
    },
    args: {
        name: '',
        src: '',
        style: { width: '64px', height: '64px' }
    }
}

export const avatarWithCustomIcon: Story = {
    render: ({ ...args }) => {
        return <Avatar {...args} />
    },
    args: {
        name: '',
        src: '',
        icon: <Face />,
        style: { width: '64px', height: '64px' }
    }
}
