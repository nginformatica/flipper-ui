import React from 'react'
import { render, screen } from '@testing-library/react'
import List from '@/core/data-display/list'
import ListItem from '@/core/data-display/list-item'
import { IconFolderShared } from '@/icons/mui'
import Sidebar from '.'

describe('Sidebar', () => {
    it('should render', () => {
        render(
            <Sidebar open onToggle={jest.fn()}>
                <List>
                    <ListItem title='Item 1' icon={<IconFolderShared />} />
                    <ListItem title='Item 2' icon={<IconFolderShared />} />
                </List>
            </Sidebar>
        )

        const item1 = screen.getByText('Item 1')
        const item2 = screen.getByText('Item 2')

        expect(item1).toBeDefined()
        expect(item2).toBeDefined()
    })

    it('should render closed', () => {
        render(
            <Sidebar open={false} onToggle={jest.fn()}>
                <List>
                    <ListItem title='Item 1' icon={<IconFolderShared />} />
                    <ListItem title='Item 2' icon={<IconFolderShared />} />
                </List>
            </Sidebar>
        )

        const item1 = screen.getByText('Item 1')
        const item2 = screen.getByText('Item 2')

        expect(item1).toBeDefined()
        expect(item2).toBeDefined()
    })

    it('should render unExpanded', () => {
        render(
            <Sidebar open expanded={false} onToggle={jest.fn()}>
                <List>
                    <ListItem title='Item 1' icon={<IconFolderShared />} />
                    <ListItem title='Item 2' icon={<IconFolderShared />} />
                </List>
            </Sidebar>
        )

        const item1 = screen.getByText('Item 1')
        const item2 = screen.getByText('Item 2')

        expect(item1).toBeDefined()
        expect(item2).toBeDefined()
    })

    it('should render with anchor right', () => {
        render(
            <Sidebar open anchor='right' onToggle={jest.fn()}>
                <List>
                    <ListItem title='Item 1' icon={<IconFolderShared />} />
                    <ListItem title='Item 2' icon={<IconFolderShared />} />
                </List>
            </Sidebar>
        )

        const item1 = screen.getByText('Item 1')
        const item2 = screen.getByText('Item 2')

        expect(item1).toBeDefined()
        expect(item2).toBeDefined()
    })

    it('should render with docked', () => {
        render(
            <Sidebar open docked onToggle={jest.fn()}>
                <List>
                    <ListItem title='Item 1' icon={<IconFolderShared />} />
                    <ListItem title='Item 2' icon={<IconFolderShared />} />
                </List>
            </Sidebar>
        )

        const item1 = screen.getByText('Item 1')
        const item2 = screen.getByText('Item 2')

        expect(item1).toBeDefined()
        expect(item2).toBeDefined()
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Sidebar open onToggle={jest.fn()}>
                <List>
                    <ListItem title='Item 1' icon={<IconFolderShared />} />
                    <ListItem title='Item 2' icon={<IconFolderShared />} />
                </List>
            </Sidebar>
        )

        expect(container).toMatchSnapshot()
    })
})
