import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Sidebar from '.'
import List from '@/core/data-display/List'
import ListItem from '@/core/data-display/ListItem'
import IconBackup from '@material-ui/icons/Backup'

describe('Sidebar', () => {
    it('should render', () => {
        render(
            <Sidebar open onToggle={jest.fn()}>
                <List>
                    <ListItem title='Item 1' icon={<IconBackup />} />
                    <ListItem title='Item 2' icon={<IconBackup />} />
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
                    <ListItem title='Item 1' icon={<IconBackup />} />
                    <ListItem title='Item 2' icon={<IconBackup />} />
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
            <Sidebar expanded={false} open onToggle={jest.fn()}>
                <List>
                    <ListItem title='Item 1' icon={<IconBackup />} />
                    <ListItem title='Item 2' icon={<IconBackup />} />
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
            <Sidebar anchor='right' open onToggle={jest.fn()}>
                <List>
                    <ListItem title='Item 1' icon={<IconBackup />} />
                    <ListItem title='Item 2' icon={<IconBackup />} />
                </List>
            </Sidebar>
        )

        const item1 = screen.getByText('Item 1')
        const item2 = screen.getByText('Item 2')

        expect(item1).toBeDefined()
        expect(item2).toBeDefined()
    })
})
