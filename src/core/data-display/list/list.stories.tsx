import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import ListItem from '@/core/data-display/list-item'
import { IconFolderShared } from '@/icons/mui-icons'
import Avatar from '../avatar'
import List from '.'

const meta: Meta<typeof List> = {
    title: 'DataDisplay/List',
    component: List,
    argTypes: {
        title: {
            control: 'text',
            description: 'The list title'
        },
        children: {
            control: false,
            description: 'The list children'
        },
        margin: {
            control: 'text',
            description: 'The list margin'
        },
        padding: {
            control: 'text',
            description: 'The list padding'
        },
        style: {
            control: 'object',
            description: 'The list style'
        }
    }
}

export default meta

type Story = StoryObj<typeof List>

export const list: Story = {
    render: ({ ...args }) => {
        return <List {...args} />
    },
    args: {
        title: 'My beautiful list',
        children: (
            <>
                <ListItem title='List Item 1' />
                <ListItem selected title='List Item 2' />
                <ListItem
                    icon={<IconFolderShared />}
                    title='List Item With Icon 1'
                />
                <ListItem
                    icon={<IconFolderShared />}
                    title='List Item With Icon 2'
                />
                <ListItem
                    avatar={<Avatar name='1' />}
                    title='List Item With Avatar 1'
                />
                <ListItem
                    avatar={<Avatar name='2' />}
                    title='List Item With Avatar 2'
                />
            </>
        ),
        margin: '0px',
        padding: '0px',
        style: {}
    }
}
