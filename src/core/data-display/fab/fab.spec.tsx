import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Fab from '.'

describe('Fab', () => {
    it('should render', () => {
        render(
            <Fab data-testid='fab-container'>
                <>Fab</>
            </Fab>
        )

        const fab = screen.getByText('Fab')
        const container = screen.getByTestId('fab-container')

        expect(fab).toBeDefined()
        expect(container).toBeDefined()
    })

    it('should render with custom style', () => {
        render(
            <Fab
                data-testid='fab-container'
                margin={10}
                padding={5}
                style={{ backgroundColor: 'blue' }}>
                <>Fab</>
            </Fab>
        )

        const container = screen.getByTestId('fab-container')

        expect(container).toHaveProperty('style.margin', '10px')
        expect(container).toHaveProperty('style.padding', '5px')
        expect(container).toHaveProperty('style.backgroundColor', 'blue')
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Fab data-testid='fab-container'>
                <>Fab</>
            </Fab>
        )
        expect(container).toMatchSnapshot()
    })
})
