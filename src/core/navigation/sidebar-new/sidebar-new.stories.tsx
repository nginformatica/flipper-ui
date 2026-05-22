import React, { useState } from 'react'
import type { ComponentProps } from 'react'
import { Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import ListItemDark from '@/core/data-display/list-item-dark'
import {
    IconAccountCircle,
    IconAssignment,
    IconAutoAwesome,
    IconDateRange,
    IconFolderShared,
    IconHome,
    IconWarning
} from '@/icons/mui'
import SidebarNew from '.'
import { SidebarNewStorie } from './styles'

type SidebarNewArgs = ComponentProps<typeof SidebarNew>

const SidebarNewDemo = (args: SidebarNewArgs) => {
    const [favoritesOpen, setFavoritesOpen] = useState(false)
    const [expanded, setExpanded] = useState(args.expanded ?? true)

    const handleFavoritesToggle = () => setFavoritesOpen(prev => !prev)
    const handleToggle = () => setExpanded(prev => !prev)

    return (
        <SidebarNewStorie>
            <SidebarNew
                {...args}
                expanded={expanded}
                favoritesOpen={favoritesOpen}
                onToggle={handleToggle}
                onFavoritesToggle={handleFavoritesToggle}>
                <ListItemDark
                    expanded={expanded}
                    title='Início'
                    icon={<IconHome />}
                />
                <ListItemDark
                    selected
                    expanded={expanded}
                    title='Agenda'
                    icon={<IconDateRange />}
                />
                <ListItemDark
                    expanded={expanded}
                    title='Mandatos'
                    icon={<IconAssignment />}
                />
                <ListItemDark
                    expanded={expanded}
                    title='Ocorrências'
                    icon={<IconWarning />}
                />
                <ListItemDark
                    expanded={expanded}
                    title='Planos de ação'
                    icon={<IconFolderShared />}
                />
                <ListItemDark
                    expanded={expanded}
                    title='Laudos e Programas'
                    icon={<IconFolderShared />}
                />
                <ListItemDark
                    expanded={expanded}
                    title='Outros'
                    icon={<IconAutoAwesome />}
                />
            </SidebarNew>
        </SidebarNewStorie>
    )
}

const meta: Meta<typeof SidebarNew> = {
    title: 'Navigation/SidebarNew',
    component: SidebarNew,
    argTypes: {
        expanded: {
            control: 'boolean',
            description: 'If the sidebar is expanded'
        },
        docked: {
            control: 'boolean',
            description: 'If the sidebar is docked'
        },
        children: {
            control: false,
            description: 'The sidebar children'
        },
        logo: {
            control: false,
            description: 'Logo rendered in the header'
        },
        favorites: {
            control: false,
            description: 'Content rendered in the favorites section'
        }
    }
}

export default meta

type Story = StoryObj<typeof SidebarNew>

export const sidebarNew: Story = {
    render: args => <SidebarNewDemo {...args} />,
    args: {
        expanded: true,
        docked: true,
        maxWidth: 248,
        logo: (
            <Typography fontWeight={500} sx={{ color: 'white' }}>
                NG | Quírons
            </Typography>
        ),
        favoritesTitle: 'Favoritos',
        favorites: (
            <>
                <ListItemDark
                    dense
                    title='Minha Conta'
                    icon={<IconAccountCircle />}
                />
                <ListItemDark
                    dense
                    title='Perfil'
                    icon={<IconFolderShared />}
                />
            </>
        )
    }
}
