import React, { useState } from 'react'
import type { Meta } from '@storybook/react'
import List from '@/core/data-display/list'
import ListItem from '@/core/data-display/list-item'
import Button from '@/core/inputs/button'
import { Drawer } from '.'
import { Backup as IconBackup } from '@/icons'

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
            <Button disabled={open} onClick={handleClick}>
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
