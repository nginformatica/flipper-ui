import * as React from 'react'
import { render, screen } from '@testing-library/react'
import IconButton from '.'

describe('IconButton', () => {
    it('should render', () => {
        render(<IconButton>IconButton</IconButton>)

        expect(screen.getByText('IconButton')).toBeDefined()
    })

    it('should render with custom style', () => {
        render(
            <IconButton
                data-testid='icon-button-container'
                margin={10}
                padding={5}
                style={{ backgroundColor: 'blue' }}>
                <>IconButton</>
            </IconButton>
        )

        const container = screen.getByTestId('icon-button-container')

        expect(container).toHaveProperty('style.margin', '10px')
        expect(container).toHaveProperty('style.padding', '5px')
        expect(container).toHaveProperty('style.backgroundColor', 'blue')
    })

    it('should match snapshot', () => {
        const { container } = render(<IconButton>IconButton</IconButton>)

        expect(container).toMatchSnapshot()
    })
})
