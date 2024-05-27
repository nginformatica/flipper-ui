import React from 'react'
import { Backup } from '@mui/icons-material'
import type { Meta, StoryFn } from '@storybook/react'
import ListItem from '@/core/data-display/list-item'
import { Avatar } from '@/experimental'
import List from '.'

export default {
    title: 'DataDisplay/List',
    component: List
} as Meta<typeof List>

const Template: StoryFn<typeof List> = args => <List {...args} />

export const Default = Template.bind({})
Default.args = {
    title: 'My beautiful list"',
    children: (
        <>
            <ListItem title='Item 1' />
            <ListItem title='Item 2' />
            <ListItem title='Item 3' />
            <ListItem title='Item 4' />
            <ListItem title='Item 5' />
            <ListItem title='Item 6' />
            <ListItem selected title='Item 7' />
            <ListItem title='Item 8' />
        </>
    )
}

export const WithIcons = Template.bind({})
WithIcons.args = {
    title: 'My beautiful list"',
    children: (
        <>
            <ListItem icon={<Backup />} title='Item 1' />
            <ListItem icon={<Backup />} title='Item 2' />
            <ListItem icon={<Backup />} title='Item 3' />
            <ListItem icon={<Backup />} title='Item 4' />
            <ListItem icon={<Backup />} title='Item 5' />
            <ListItem icon={<Backup />} title='Item 6' />
            <ListItem icon={<Backup />} title='Item 7' />
            <ListItem icon={<Backup />} title='Item 8' />
        </>
    )
}

export const WithAvatar = Template.bind({})
WithAvatar.args = {
    title: 'My beautiful list"',
    children: (
        <>
            <ListItem avatar={<Avatar name='1' />} title='Person 1' />
            <ListItem avatar={<Avatar name='2' />} title='Person 2' />
            <ListItem avatar={<Avatar name='3' />} title='Person 3' />
            <ListItem avatar={<Avatar name='4' />} title='Person 4' />
            <ListItem avatar={<Avatar name='5' />} title='Person 5' />
            <ListItem avatar={<Avatar name='6' />} title='Person 6' />
            <ListItem avatar={<Avatar name='7' />} title='Person 7' />
            <ListItem avatar={<Avatar name='8' />} title='Person 8' />
        </>
    )
}
