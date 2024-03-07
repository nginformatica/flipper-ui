import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import ListItem from '@/core/data-display/list-item'
import { Avatar } from '../avatar'
import List from '.'
import { Backup } from '@/icons'

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
            <ListItem avatar={<Avatar>1</Avatar>} title='Person 1' />
            <ListItem avatar={<Avatar>2</Avatar>} title='Person 2' />
            <ListItem avatar={<Avatar>3</Avatar>} title='Person 3' />
            <ListItem avatar={<Avatar>4</Avatar>} title='Person 4' />
            <ListItem avatar={<Avatar>5</Avatar>} title='Person 5' />
            <ListItem avatar={<Avatar>6</Avatar>} title='Person 6' />
            <ListItem avatar={<Avatar>7</Avatar>} title='Person 7' />
            <ListItem avatar={<Avatar>8</Avatar>} title='Person 8' />
        </>
    )
}
