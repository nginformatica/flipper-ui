import React, { useState } from 'react'
import { Backup } from '@mui/icons-material'
import type { Meta, StoryFn } from '@storybook/react'
import ListItem from '@/core/data-display/list-item'
import Button from '@/core/inputs/button'
import Menu from '.'

export default {
    title: 'Navigation/Menu',
    component: Menu
} as Meta<typeof Menu>

const Template: StoryFn<typeof Menu> = args => {
    const [open, setOpen] = useState(false)

    function handleClick() {
        setOpen(!open)
    }

    return (
        <>
            <Button onClick={handleClick}>Menu</Button>
            <Menu {...args} open={open} onClick={handleClick} />
        </>
    )
}

export const Default = Template.bind({})
Default.args = {
    style: { margin: '3em' },
    children: (
        <>
            <ListItem icon={<Backup />} title='Menu 1' />
            <ListItem icon={<Backup />} title='Menu 2' />
            <ListItem icon={<Backup />} title='Menu 3' />
            <ListItem icon={<Backup />} title='Menu 4' />
            <ListItem icon={<Backup />} title='Menu 5' />
            <ListItem icon={<Backup />} title='Menu 6' />
            <ListItem icon={<Backup />} title='Menu 7' />
            <ListItem icon={<Backup />} title='Menu 8' />
        </>
    )
}
