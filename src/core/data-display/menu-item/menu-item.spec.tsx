import * as React from 'react'
import { render, screen } from '@testing-library/react'
import MenuItem from '.'

describe('MenuItem', () => {
    it('should render', () => {
        render(<MenuItem title='Item 1' />)

        const menuItem = screen.getByRole('menuitem', { name: 'Item 1' })

        expect(menuItem).toBeDefined()
    })
})
