import React from 'react'
import { render, screen } from '@testing-library/react'
import { IconAdd } from '@/icons/mui'
import IconButton from '.'
import '@testing-library/jest-dom'

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

    it('should name an icon-only button after its name', () => {
        render(
            <IconButton name='remove-item'>
                <IconAdd />
            </IconButton>
        )

        expect(screen.getByRole('button')).toHaveAccessibleName('remove-item')
    })

    it('should keep an explicit aria-label over the name', () => {
        render(
            <IconButton name='remove-item' aria-label='Excluir item'>
                <IconAdd />
            </IconButton>
        )

        expect(screen.getByRole('button')).toHaveAccessibleName('Excluir item')
    })

    it('should not name a button after the name when it has a text child', () => {
        render(<IconButton name='remove-item'>Excluir</IconButton>)

        const button = screen.getByRole('button')

        expect(button).not.toHaveAttribute('aria-label')
        expect(button).toHaveAccessibleName('Excluir')
    })

    it('should not name a button after the name when the child is a number', () => {
        render(<IconButton name='counter'>{3}</IconButton>)

        const button = screen.getByRole('button')

        expect(button).not.toHaveAttribute('aria-label')
        expect(button).toHaveAccessibleName('3')
    })

    it('should render with no name at all when nothing names it', () => {
        render(
            <IconButton>
                <IconAdd />
            </IconButton>
        )

        expect(screen.getByRole('button')).not.toHaveAttribute('aria-label')
    })

    it('should match snapshot', () => {
        const { container } = render(<IconButton>IconButton</IconButton>)

        expect(container).toMatchSnapshot()
    })
})
