import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Line from '.'
import { background, primary as primaryColor } from '../../colors'

describe('Line', () => {
    it('should render closed', () => {
        render(<Line data-testid='line-component' />)

        const element = screen.getByTestId('line-component')

        expect(element).toBeDefined()
        expect(element).toHaveProperty('style.flex', '1')
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

        expect(element).toHaveProperty('style.color', 'red')
        expect(element).toHaveProperty('style.margin', '10px')
        expect(element).toHaveProperty('style.padding', '5px')
        expect(element).toHaveProperty(
            'style.border',
            `1px solid ${background.normal.toLowerCase()}`
        )
    })

    it('should render with color primary', () => {
        render(<Line data-testid='line-component' primary />)

        const element = screen.getByTestId('line-component')

        expect(element).toHaveProperty(
            'style.border',
            `1px solid ${primaryColor.normal}`
        )
    })

    it('should match snapshot', () => {
        const { container } = render(<Line />)
        expect(container).toMatchSnapshot()
    })
})
