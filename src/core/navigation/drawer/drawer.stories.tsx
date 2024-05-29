/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { Backup as IconBackup } from '@mui/icons-material'
import type { Meta, StoryObj } from '@storybook/react'
import List from '@/core/data-display/list'
import ListItem from '@/core/data-display/list-item'
import Button from '@/core/inputs/button'
import Drawer from '.'

const meta: Meta<typeof Drawer> = {
    title: 'Navigation/Drawer',
    component: Drawer,
    argTypes: {
        top: {
            control: 'number',
            description: 'The drawer top position.'
        },
        width: {
            control: 'number',
            description: 'The drawer width.'
        },
        margin: {
            control: 'text',
            description: 'The drawer margin.'
        },
        padding: {
            control: 'text',
            description: 'The drawer padding.'
        },
        style: {
            control: 'object',
            description: 'The drawer style.'
        }
    }
}

export default meta

type Story = StoryObj<typeof Drawer>

export const drawer: Story = {
    render: ({ ...args }) => {
        const [open, setOpen] = useState(false)

        const handleClick = () => {
            setOpen(!open)
        }

        return (
            <>
                <Button disabled={open} onClick={handleClick}>
                    Open
                </Button>
                <Drawer {...args} open={open} onClick={handleClick}>
                    <List>
                        <ListItem icon={<IconBackup />} />
                        <ListItem icon={<IconBackup />} />
                    </List>
                </Drawer>
            </>
        )
    },
    args: {
        top: 0,
        width: 75,
        margin: '',
        padding: '',
        style: {}
    }
}
