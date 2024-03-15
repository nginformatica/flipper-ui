import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import VisibilityIcon from '.'

describe('VisibilityIcon', () => {
    it('should render', () => {
        render(<VisibilityIcon show onToggle={jest.fn()} />)

        const svg = screen.getByTestId('icon-off')

        expect(svg).toBeDefined()
    })

    it('should render hidden', () => {
        render(<VisibilityIcon show={false} onToggle={jest.fn()} />)

        const svg = screen.getByTestId('icon-on')

        expect(svg).toBeDefined()
    })

    it('should call onClick', () => {
        const onClick = jest.fn()

        const container = render(<VisibilityIcon show onToggle={onClick} />)

        const button = container.container.querySelector('button')

        fireEvent.click(button || container.container)

        expect(onClick).toHaveBeenCalled()
    })

    it('should have name', () => {
        const container = render(
            <VisibilityIcon show name='show' onToggle={jest.fn()} />
        )

        const button = container.container.querySelector('button')

        expect(button).toHaveProperty('name', 'show')
    })

    it('should match snapshot', () => {
        const container = render(<VisibilityIcon show onToggle={jest.fn()} />)

        expect(container).toMatchSnapshot()
    })
})
