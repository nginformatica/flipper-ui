import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Sidebar from '.'
import List from '@/core/data-display/List'
import ListItem from '@/core/data-display/ListItem'
import IconBackup from '@material-ui/icons/Backup'

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
                <ListItem title='Item 1' icon={<IconBackup />} />
                <ListItem title='Item 2' icon={<IconBackup />} />
                <ListItem title='Item 3' icon={<IconBackup />} />
                <ListItem title='Item 4' icon={<IconBackup />} />
            </List>
        </>
    )
}
