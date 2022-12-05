import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Menu from '../core/Menu'
import Button from '../core/Button'
import ListItem from '../core/ListItem'
import IconBackup from '@material-ui/icons/Backup'

export default {
    title: 'Menu',
    component: Menu
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = args => {
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
    title: 'My beautiful Menu"',
    children: (
        <>
            <ListItem icon={<IconBackup />} title='Menu 1' />
            <ListItem icon={<IconBackup />} title='Menu 2' />
            <ListItem icon={<IconBackup />} title='Menu 3' />
            <ListItem icon={<IconBackup />} title='Menu 4' />
            <ListItem icon={<IconBackup />} title='Menu 5' />
            <ListItem icon={<IconBackup />} title='Menu 6' />
            <ListItem icon={<IconBackup />} title='Menu 7' />
            <ListItem icon={<IconBackup />} title='Menu 8' />
        </>
    )
}
