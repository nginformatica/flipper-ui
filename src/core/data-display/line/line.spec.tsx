import React from 'react'
import { render, screen } from '@testing-library/react'
import Line from '.'

describe('Line', () => {
    it('should render closed', () => {
        render(<Line data-testid='line-component' />)

        const element = screen.getByTestId('line-component')

        expect(element).toBeDefined()
    })

    it('should render with custom styles', () => {
        render(
            <Line
                data-testid='line-component'
                margin={10}
                padding={5}
                style={{ color: 'red' }}
            />
        )

        const element = screen.getByTestId('line-component')

        expect(element).toHaveProperty('style.flex', '1 1 0%')
        expect(element).toHaveProperty('style.color', 'red')
        expect(element).toHaveProperty('style.margin', '10px')
        expect(element).toHaveProperty('style.padding', '5px')
        expect(element).toHaveProperty(
            'style.border',
            `1px solid rgb(224, 224, 224)`
        )
    })

    it('should render with color primary', () => {
        render(<Line primary data-testid='line-component' />)

        const element = screen.getByTestId('line-component')

        expect(element).toHaveProperty(
            'style.border',
            `1px solid rgb(64, 163, 68)`
        )
    })

    it('should match snapshot', () => {
        const { container } = render(<Line />)

        expect(container).toMatchSnapshot()
    })
})
