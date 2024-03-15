import React from 'react'
import { render, screen } from '@testing-library/react'
import Radio from '.'

describe('Radio', () => {
    it('should render', () => {
        render(<Radio data-testid='radio-container' />)
        const container = screen.getByTestId('radio-container')

        expect(container).toBeDefined()
    })

    it('should match snapshot', () => {
        const { container } = render(<Radio />)

        expect(container).toMatchSnapshot()
    })
})
