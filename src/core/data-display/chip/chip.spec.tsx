import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Chip from '.'

describe('Chip', () => {
    it('should render', () => {
        render(<Chip label='chip-label' onChange={jest.fn()} />)

        const label = screen.getByText('chip-label')

        expect(label).toBeDefined()
    })

    it('should render square', () => {
        render(<Chip square label='chip-label' onChange={jest.fn()} />)

        const label = screen.getByText('chip-label')

        const findPrimaryClass = Array.from(
            (label.parentElement || label).classList
        )
            .join(' ')
            .indexOf('makeStyles-root-')

        expect(findPrimaryClass).toBeGreaterThan(-1)
    })

    it('should call onDelete', () => {
        const onDelete = jest.fn()

        render(<Chip label='chip-label' onDelete={onDelete} />)

        const svg = screen.getByRole('button')

        svg.click()

        waitFor(() => {
            expect(onDelete).toHaveBeenCalled()
        })
    })
})
