import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import Drawer from '.'
import List from '@/core/data-display/list'
import ListItem from '@/core/data-display/list-item'
import { Backup as IconBackup } from '@/icons'
import Button from '@/core/inputs/button'

export default {
    title: 'Navigation/Drawer',
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
