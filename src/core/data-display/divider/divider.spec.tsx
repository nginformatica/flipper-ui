import React from 'react'
import { render, screen } from '@testing-library/react'
import { Divider } from '.'

describe('Divider', () => {
    it('should render', () => {
        render(<Divider data-testid='divider' />)

        const divider = screen.getByTestId('divider')

        expect(divider).toBeDefined()
    })

    it('should render with custom style', () => {
        render(
            <Divider
                data-testid='divider'
                margin={10}
                padding={5}
                style={{ backgroundColor: 'blue' }}
            />
        )

        const divider = screen.getByTestId('divider')

        expect(divider).toHaveProperty('style.margin', '10px')
        expect(divider).toHaveProperty('style.padding', '5px')
        expect(divider).toHaveProperty('style.backgroundColor', 'blue')
    })

    it('should match snapshot', () => {
        const { container } = render(<Divider />)

        expect(container).toMatchSnapshot()
    })
})
