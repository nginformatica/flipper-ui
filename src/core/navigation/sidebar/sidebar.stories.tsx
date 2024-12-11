import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import List from '@/core/data-display/list'
import ListItem from '@/core/data-display/list-item'
import { IconFolderShared } from '@/icons/mui-icons'
import Sidebar from '.'
import { SidebarStorie } from './styles'

const meta: Meta<typeof Sidebar> = {
    title: 'Navigation/Sidebar',
    component: Sidebar,
    argTypes: {
        expanded: {
            control: 'boolean',
            description: 'If the sidebar is expanded'
        },
        docked: {
            control: 'boolean',
            description: 'If the sidebar is docked'
        },
        children: {
            control: false,
            description: 'The sidebar children'
        }
    }
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const sidebar: Story = {
    render: ({ ...args }) => {
        return (
            <SidebarStorie>
                <Sidebar {...args} />
            </SidebarStorie>
        )
    },
    args: {
        expanded: false,
        docked: true,
        children: (
            <List>
                <ListItem title='Item 1' icon={<IconFolderShared />} />
                <ListItem title='Item 2' icon={<IconFolderShared />} />
                <ListItem title='Item 3' icon={<IconFolderShared />} />
                <ListItem title='Item 4' icon={<IconFolderShared />} />
            </List>
        )
    }
}
