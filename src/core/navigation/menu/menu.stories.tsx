import React, { useState } from 'react'
import { Backup } from '@mui/icons-material'
import type { IMenuProps } from '.'
import type { Meta, StoryObj } from '@storybook/react'
import ListItem from '@/core/data-display/list-item'
import Button from '@/core/inputs/button'
import Menu from '.'

const meta: Meta<typeof Menu> = {
    title: 'Navigation/Menu',
    component: Menu,
    argTypes: {
        children: {
            control: false,
            description: 'The menu content'
        },
        margin: {
            control: 'text',
            description: 'The menu margin'
        },
        padding: {
            control: 'text',
            description: 'The menu padding'
        },
        style: {
            control: 'object',
            description: 'The menu style'
        }
    }
}

export default meta

type Story = StoryObj<typeof Menu>

const MenuWrapper = (args: JSX.IntrinsicAttributes & IMenuProps) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <>
            <Button onClick={handleClick}>Menu</Button>
            <Menu {...args} open={open} onClick={handleClick} />
        </>
    )
}

export const menu: Story = {
    render: ({ ...args }) => {
        return <MenuWrapper {...args} />
    },
    args: {
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
        ),
        margin: '',
        padding: '',
        style: {}
    }
}
