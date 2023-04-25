import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '.'

describe('Header', () => {
    it('should render', () => {
        render(<Header>Flipper UI</Header>)

        const child = screen.getByText('Flipper UI')

        expect(child).toBeDefined()
    })

    it('should render with custom style', () => {
        render(
            <Header
                data-testid='header-container'
                margin={10}
                padding={5}
                style={{ backgroundColor: 'blue' }}>
                <>Flipper UI</>
            </Header>
        )

        const container = screen.getByTestId('header-container')

        expect(container).toHaveProperty('style.margin', '10px')
        expect(container).toHaveProperty('style.padding', '5px')
        expect(container).toHaveProperty('style.backgroundColor', 'blue')
    })

    it('should match snapshot', () => {
        const { container } = render(<Header>Flipper UI</Header>)
        expect(container).toMatchSnapshot()
    })
})
