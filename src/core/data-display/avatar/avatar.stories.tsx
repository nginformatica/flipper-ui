import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { IconFace } from '@/icons/mui'
import Avatar from '.'

const srcImage = 'https://imgflip.com/s/meme/Doge.jpg'

const meta: Meta<typeof Avatar> = {
    title: 'DataDisplay/Avatar',
    component: Avatar,
    argTypes: {
        name: {
            control: 'text',
            description: 'The avatar name. Displayed in case there is no image'
        },
        src: {
            control: 'text',
            description: 'The avatar src image'
        },
        icon: {
            control: false,
            description:
                'The avatar icon. Displayed in case there is no image and no name'
        },
        style: {
            control: 'object',
            description: 'The avatar style'
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
        icon: <IconFace />,
        style: { width: '64px', height: '64px' }
    }
}
