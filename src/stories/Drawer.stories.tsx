import React, { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import Drawer from '../core/Drawer'
import List from '../core/List'
import ListItem from '../core/ListItem'
import { Backup as IconBackup } from '../icons'
import Button from '../core/Button'

export default {
    title: 'Drawer',
    component: Drawer
} as ComponentMeta<typeof Drawer>

export const Default = () => {
    const [open, SetOpen] = useState(false)

    const handleClick = () => {
        SetOpen(!open)
    }

    return (
        <>
            <Button onClick={ handleClick } disabled={ open } >Open</Button>
            <Drawer open={ open } onClick={ handleClick }>
                <List>
                    <ListItem icon={ <IconBackup /> } />
                    <ListItem icon={ <IconBackup /> } />
                </List>
            </Drawer>
        </>
    )
}
