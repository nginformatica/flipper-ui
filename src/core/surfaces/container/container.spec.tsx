import React from 'react'
import { render, screen } from '@testing-library/react'
import Container from '.'

describe('Container', () => {
    it('should render', () => {
        render(<Container data-testid='container' />)

        const container = screen.getByTestId('container')

        expect(container).toBeDefined()
    })

    it('should render children', () => {
        render(<Container data-testid='container'>I am a container</Container>)

        const label = screen.getByText('I am a container')

        expect(label).toBeDefined()
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Container data-testid='container'>I am a container</Container>
        )

        expect(container).toMatchSnapshot()
    })
})
