import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { IconFace } from '@/icons/mui'
import ListItemDark from '.'
import '@testing-library/jest-dom'

describe('ListItemDark', () => {
    it('should render the title', () => {
        render(<ListItemDark title='Item 1' />)

        expect(screen.getByText('Item 1')).toBeInTheDocument()
    })

    it('should render the icon', () => {
        render(<ListItemDark title='Item 1' icon={<IconFace />} />)

        const button = screen.getByRole('button')

        expect(button.querySelector('svg')).toBeInTheDocument()
    })

    it('should call onClick when clicked', () => {
        const handleClick = jest.fn()

        render(<ListItemDark title='Item 1' onClick={handleClick} />)

        fireEvent.click(screen.getByText('Item 1'))

        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should be disabled when disabled is true', () => {
        render(<ListItemDark disabled title='Item 1' />)

        expect(screen.getByRole('button')).toHaveAttribute(
            'aria-disabled',
            'true'
        )
    })

    it('should render unExpanded', () => {
        render(<ListItemDark expanded={false} title='Item 1' />)

        expect(screen.getByText('Item 1')).toBeInTheDocument()
    })

    it('should match snapshot', () => {
        const { container } = render(
            <ListItemDark selected title='Agenda' icon={<IconFace />} />
        )

        expect(container).toMatchSnapshot()
    })

    it('should match snapshot when dense', () => {
        const { container } = render(
            <ListItemDark dense title='Perfil' icon={<IconFace />} />
        )

        expect(container).toMatchSnapshot()
    })
})
