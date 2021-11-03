import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Sidebar from '../core/Sidebar'
import List from '../core/List'
import ListItem from '../core/ListItem'
import IconBackup from '@material-ui/icons/Backup'

export default {
    title: 'Sidebar',
    component: Sidebar
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = args => <Sidebar { ...args } />

export const Default = Template.bind({})
Default.args = {
    title: 'My beautiful Sidebar"',
    children: (
        <>
            <List>
                <ListItem icon={ <IconBackup /> } />
                <ListItem icon={ <IconBackup /> } />
                <ListItem icon={ <IconBackup /> } />
                <ListItem icon={ <IconBackup /> } />
            </List>
        </>
    )
}
