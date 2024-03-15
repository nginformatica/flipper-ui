import React from 'react'
import { render, screen } from '@testing-library/react'
import Content from '.'

describe('Content', () => {
    it('should render', () => {
        render(<Content data-testid='container' />)

        const container = screen.getByTestId('container')

        expect(container).toBeDefined()
    })

    it('should render children', () => {
        render(<Content data-testid='container'>I am a Content</Content>)

        const label = screen.getByText('I am a Content')

        expect(label).toBeDefined()
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Content data-testid='container'>I am a Content</Content>
        )

        expect(container).toMatchSnapshot()
    })
})
