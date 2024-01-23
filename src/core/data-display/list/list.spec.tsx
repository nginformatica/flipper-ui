import * as React from 'react'
import { render, screen } from '@testing-library/react'
import ListItem from '@/core/data-display/list-item'
import { List } from '.'

describe('List', () => {
    it('should render', () => {
        render(
            <List>
                <ListItem>Item 1</ListItem>
                <ListItem>Item 2</ListItem>
                <ListItem>Item 3</ListItem>
            </List>
        )

        const list = screen.queryAllByRole('menuitem')

        expect(list).toHaveLength(3)
    })

    it('should render with title', () => {
        render(
            <List title='My beautiful list'>
                <ListItem>Item 1</ListItem>
                <ListItem>Item 2</ListItem>
                <ListItem>Item 3</ListItem>
            </List>
        )

        const list = screen.queryAllByRole('menuitem')
        const title = screen.queryByText('My beautiful list')

        expect(list).toHaveLength(3)
        expect(title).toBeDefined()
    })

    it('should render with custom className', () => {
        render(
            <List data-testid='list-container' className='my-custom-class'>
                <ListItem>Item 1</ListItem>
                <ListItem>Item 2</ListItem>
                <ListItem>Item 3</ListItem>
            </List>
        )

        const listContainer = screen.getByTestId('list-container')

        expect(listContainer.classList).toContain('my-custom-class')
    })
})
