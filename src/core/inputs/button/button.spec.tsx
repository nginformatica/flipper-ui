import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '.'

describe('Button', () => {
    it('should render', () => {
        render(<Button data-testid='button-container'>Button</Button>)

        const button = screen.getByText('Button')

        expect(button).toBeDefined()
    })

    it('should render with default style', () => {
        render(<Button data-testid='button-container'>Button</Button>)

        const container = screen.getByTestId('button-container')

        expect(container).toHaveProperty('style.opacity', '1')
        expect(container).toHaveProperty('style.borderStyle', '')
    })

    it('should render with opacity when selected', () => {
        render(
            <Button selected data-testid='button-container'>
                Button
            </Button>
        )

        const container = screen.getByTestId('button-container')

        expect(container).toHaveProperty('style.opacity', '0.5')
    })

    it('should render outlined', () => {
        render(
            <Button variant='outlined' data-testid='button-container'>
                Button
            </Button>
        )

        const container = screen.getByTestId('button-container')

        expect(container).toHaveProperty('style.borderStyle', '')
    })

    it('should call onClick', () => {
        const onClick = jest.fn()

        render(<Button onClick={onClick}>Button</Button>)

        const button = screen.getByText('Button')

        button.click()

        expect(onClick).toHaveBeenCalled()
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Button data-testid='button-container'>Button</Button>
        )

        expect(container).toMatchSnapshot()
    })
})
