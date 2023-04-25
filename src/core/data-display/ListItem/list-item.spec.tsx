import * as React from 'react'
import { render, screen } from '@testing-library/react'
import ListItem from '.'

describe('ListItem', () => {
    it('should render', () => {
        render(<ListItem title='Item 1' />)

        const listItem = screen.getByText('Item 1')

        expect(listItem).toBeDefined()
    })

    it('should render with avatar', () => {
        render(<ListItem title='Item 1' avatar={<div>Avatar</div>} />)

        const listItem = screen.getByText('Item 1')
        const avatar = screen.getByText('Avatar')

        expect(listItem).toBeDefined()
        expect(avatar).toBeDefined()
    })

    it('should render with action', () => {
        render(<ListItem title='Item 1' action={<div>Action</div>} />)

        const listItem = screen.getByText('Item 1')
        const action = screen.getByText('Action')

        expect(listItem).toBeDefined()
        expect(action).toBeDefined()
    })
})
