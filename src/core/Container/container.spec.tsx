import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Container from '.'

describe('Container', () => {
    it('should render', () => {
        render(<Container data-testid='container'>I am a container</Container>)

        const container = screen.getByTestId('container')
        const label = screen.getByText('I am a container')

        expect(container).toBeDefined()
        expect(label).toBeDefined()
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Container data-testid='container'>I am a container</Container>
        )
        expect(container).toMatchSnapshot()
    })
})
