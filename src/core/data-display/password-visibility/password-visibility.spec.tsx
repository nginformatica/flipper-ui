import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import PasswordVisibility from '.'

describe('PasswordVisibility', () => {
    it('should render', () => {
        render(<PasswordVisibility show onToggle={jest.fn()} />)

        const svg = screen.getByTestId('icon-off')

        expect(svg).toBeDefined()
    })

    it('should render hidden', () => {
        render(<PasswordVisibility show={false} onToggle={jest.fn()} />)

        const svg = screen.getByTestId('icon-on')

        expect(svg).toBeDefined()
    })

    it('should call onClick', () => {
        const onClick = jest.fn()

        const container = render(<PasswordVisibility show onToggle={onClick} />)

        const button = container.container.querySelector('button')

        fireEvent.click(button || container.container)

        expect(onClick).toHaveBeenCalled()
    })

    it('should have name', () => {
        const container = render(
            <PasswordVisibility show name='show' onToggle={jest.fn()} />
        )

        const button = container.container.querySelector('button')

        expect(button).toHaveProperty('name', 'show')
    })

    it('should match snapshot', () => {
        const container = render(
            <PasswordVisibility show onToggle={jest.fn()} />
        )

        expect(container).toMatchSnapshot()
    })
})
