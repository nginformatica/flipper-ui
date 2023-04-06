import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import VisibilityIcon from './VisibilityIcon'

describe('VisibilityIcon', () => {
    it('should render visible', () => {
        render(<VisibilityIcon show onToggle={jest.fn()} />)

        waitFor(() => {
            const svg = screen.getByRole('icon-off')
            expect(svg).toBeDefined()
        })
    })

    it('should render hidden', () => {
        render(<VisibilityIcon show={false} onToggle={jest.fn()} />)

        waitFor(() => {
            const svg = screen.getByRole('icon-on')
            expect(svg).toBeDefined()
        })
    })

    it('should call onClick', () => {
        const onClick = jest.fn()
        render(<VisibilityIcon show onToggle={onClick} />)

        waitFor(() => {
            const button = screen.getByRole('icon-off')
            button.click()

            expect(onClick).toHaveBeenCalled()
        })
    })

    it('should have name', () => {
        const NAME = 'show'
        render(<VisibilityIcon show name={NAME} onToggle={jest.fn()} />)

        waitFor(() => {
            const svg = screen.getByRole('icon-off')
            expect(svg).toHaveProperty('name', NAME)
        })
    })
})
