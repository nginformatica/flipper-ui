import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '.'

describe('Button', () => {
    it('should render', () => {
        render(<Button data-testid='button-container'>Button</Button>)

        const button = screen.getByText('Button')
        const container = screen.getByTestId('button-container')

        expect(button).toBeDefined()
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

    it('should render dashed', () => {
        render(
            <Button variant='dashed' data-testid='button-container'>
                Button
            </Button>
        )

        const container = screen.getByTestId('button-container')

        expect(container).toHaveProperty('style.borderStyle', 'dashed')
    })

    it('should call onClick', () => {
        const onClick = jest.fn()

        render(<Button onClick={onClick}>Button</Button>)

        const button = screen.getByText('Button')

        button.click()

        expect(onClick).toHaveBeenCalled()
    })
})
