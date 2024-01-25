import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import { List } from '@/core/data-display/list'
import ListItem from '@/core/data-display/list-item'
import { Backup } from '@/icons'
import { Sidebar } from '.'

export default {
    title: 'Navigation/Sidebar',
    component: Sidebar
} as Meta<typeof Sidebar>

const Template: StoryFn<typeof Sidebar> = args => <Sidebar {...args} />

export const Default = Template.bind({})
Default.args = {
    title: 'My beautiful Sidebar"',
    expanded: false,
    children: (
        <>
            <List>
                <ListItem title='Item 1' icon={<Backup />} />
                <ListItem title='Item 2' icon={<Backup />} />
                <ListItem title='Item 3' icon={<Backup />} />
                <ListItem title='Item 4' icon={<Backup />} />
            </List>
        </>
    )
}
