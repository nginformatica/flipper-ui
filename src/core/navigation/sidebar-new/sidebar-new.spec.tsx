import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import List from '@/core/data-display/list'
import ListItem from '@/core/data-display/list-item'
import { IconFolderShared } from '@/icons/mui'
import SidebarNew from '.'

describe('SidebarNew', () => {
    it('should render', () => {
        render(
            <SidebarNew open onToggle={jest.fn()}>
                <List>
                    <ListItem title='Item 1' icon={<IconFolderShared />} />
                    <ListItem title='Item 2' icon={<IconFolderShared />} />
                </List>
            </SidebarNew>
        )

        const item1 = screen.getByText('Item 1')
        const item2 = screen.getByText('Item 2')

        expect(item1).toBeDefined()
        expect(item2).toBeDefined()
    })

    it('should render closed', () => {
        render(
            <SidebarNew open={false} onToggle={jest.fn()}>
                <List>
                    <ListItem title='Item 1' icon={<IconFolderShared />} />
                    <ListItem title='Item 2' icon={<IconFolderShared />} />
                </List>
            </SidebarNew>
        )

        const item1 = screen.getByText('Item 1')
        const item2 = screen.getByText('Item 2')

        expect(item1).toBeDefined()
        expect(item2).toBeDefined()
    })

    it('should render unExpanded', () => {
        render(
            <SidebarNew open expanded={false} onToggle={jest.fn()}>
                <List>
                    <ListItem title='Item 1' icon={<IconFolderShared />} />
                    <ListItem title='Item 2' icon={<IconFolderShared />} />
                </List>
            </SidebarNew>
        )

        const item1 = screen.getByText('Item 1')
        const item2 = screen.getByText('Item 2')

        expect(item1).toBeDefined()
        expect(item2).toBeDefined()
    })

    it('should render with anchor right', () => {
        render(
            <SidebarNew open anchor='right' onToggle={jest.fn()}>
                <List>
                    <ListItem title='Item 1' icon={<IconFolderShared />} />
                    <ListItem title='Item 2' icon={<IconFolderShared />} />
                </List>
            </SidebarNew>
        )

        const item1 = screen.getByText('Item 1')
        const item2 = screen.getByText('Item 2')

        expect(item1).toBeDefined()
        expect(item2).toBeDefined()
    })

    it('should render with docked', () => {
        render(
            <SidebarNew open docked onToggle={jest.fn()}>
                <List>
                    <ListItem title='Item 1' icon={<IconFolderShared />} />
                    <ListItem title='Item 2' icon={<IconFolderShared />} />
                </List>
            </SidebarNew>
        )

        const item1 = screen.getByText('Item 1')
        const item2 = screen.getByText('Item 2')

        expect(item1).toBeDefined()
        expect(item2).toBeDefined()
    })

    it('should render with logo', () => {
        render(
            <SidebarNew open logo={<span>LOGO</span>} onToggle={jest.fn()}>
                <List>
                    <ListItem title='Item 1' icon={<IconFolderShared />} />
                </List>
            </SidebarNew>
        )

        expect(screen.getByText('LOGO')).toBeDefined()
    })

    it('should render with logo and unExpanded', () => {
        render(
            <SidebarNew
                open
                expanded={false}
                logo={<span>LOGO</span>}
                onToggle={jest.fn()}>
                <List>
                    <ListItem title='Item 1' icon={<IconFolderShared />} />
                </List>
            </SidebarNew>
        )

        expect(screen.getByText('LOGO')).toBeDefined()
    })

    it('should render favorites and toggle the favorites list', () => {
        const onFavoritesToggle = jest.fn()

        render(
            <SidebarNew
                open
                favoritesOpen
                name='nav'
                favorites={<span>Favorite item</span>}
                onFavoritesToggle={onFavoritesToggle}
                onToggle={jest.fn()}>
                <List>
                    <ListItem title='Item 1' icon={<IconFolderShared />} />
                </List>
            </SidebarNew>
        )

        fireEvent.click(screen.getByTestId('sidebar-new-favorites-button'))
        expect(onFavoritesToggle).toHaveBeenCalled()

        const header = screen.getByTestId('sidebar-new-favorites-header')

        expect(header.getAttribute('aria-expanded')).toBe('true')
        fireEvent.click(header)
        expect(header.getAttribute('aria-expanded')).toBe('false')
        fireEvent.click(header)
        expect(header.getAttribute('aria-expanded')).toBe('true')
    })

    it('should call onFavoritesListToggle when the list is controlled', () => {
        const onFavoritesListToggle = jest.fn()

        render(
            <SidebarNew
                open
                favoritesOpen
                favoritesListOpen={false}
                favorites={<span>Favorite item</span>}
                onFavoritesListToggle={onFavoritesListToggle}
                onToggle={jest.fn()}>
                <List>
                    <ListItem title='Item 1' icon={<IconFolderShared />} />
                </List>
            </SidebarNew>
        )

        const header = screen.getByTestId('sidebar-new-favorites-header')

        expect(header.getAttribute('aria-expanded')).toBe('false')
        fireEvent.click(header)
        expect(onFavoritesListToggle).toHaveBeenCalled()
    })

    it('should render favorites button with unExpanded', () => {
        render(
            <SidebarNew
                open
                expanded={false}
                favorites={<span>Favorite item</span>}
                onToggle={jest.fn()}>
                <List>
                    <ListItem title='Item 1' icon={<IconFolderShared />} />
                </List>
            </SidebarNew>
        )

        expect(screen.getByTestId('sidebar-new-favorites-button')).toBeDefined()
    })

    it('should match snapshot', () => {
        const { container } = render(
            <SidebarNew open onToggle={jest.fn()}>
                <List>
                    <ListItem title='Item 1' icon={<IconFolderShared />} />
                    <ListItem title='Item 2' icon={<IconFolderShared />} />
                </List>
            </SidebarNew>
        )

        expect(container).toMatchSnapshot()
    })
})
