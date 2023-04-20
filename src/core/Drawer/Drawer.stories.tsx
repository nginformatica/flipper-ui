import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import Drawer from '.'
import List from '../List'
import ListItem from '../ListItem'
import { Backup as IconBackup } from '../../icons'
import Button from '../Button'

export default {
    title: 'Drawer',
    component: Drawer
} as Meta<typeof Drawer>

export const Default = () => {
    const [open, SetOpen] = useState(false)

    const handleClick = () => {
        SetOpen(!open)
    }

    return (
        <>
            <Button onClick={handleClick} disabled={open}>
                Open
            </Button>
            <Drawer open={open} onClick={handleClick}>
                <List>
                    <ListItem icon={<IconBackup />} />
                    <ListItem icon={<IconBackup />} />
                </List>
            </Drawer>
        </>
    )
}
