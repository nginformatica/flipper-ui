import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { default as userEvent } from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { MultipleField } from './chip-field.stories'

const mockOnChange = jest.fn()

describe('ChipField', () => {
    beforeEach(() => {
        mockOnChange.mockClear()
    })

    it('should render with the correct label', () => {
        render(<MultipleField onChange={mockOnChange} />)

        const input = screen.getByLabelText(/Emails */i)

        expect(input).toBeInTheDocument()
    })

    it('should add a chip when Enter key is pressed', () => {
        render(<MultipleField onChange={mockOnChange} />)

        const input = screen.getByLabelText(/Emails */i) as HTMLInputElement

        userEvent.type(input, 'New Chip{enter}').then(() =>
            fireEvent.keyDown(input, {
                key: 'Enter'
            })
        )

        waitFor(() => {
            expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object), [
                'New Chip'
            ])
        })

        waitFor(() => {
            expect(input.value).toBe('')
        })
    })

    it('should add a chip when comma is pressed', () => {
        render(<MultipleField onChange={mockOnChange} />)

        const input = screen.getByLabelText(/Emails */i) as HTMLInputElement

        userEvent.type(input, 'New Chip').then(() =>
            fireEvent.keyDown(input, {
                key: ','
            })
        )

        waitFor(() => {
            expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object), [
                'New Chip'
            ])
        })

        waitFor(() => {
            expect(input.value).toBe('')
        })
    })

    it('should add a chip when space is pressed', () => {
        render(<MultipleField onChange={mockOnChange} />)

        const input = screen.getByLabelText(/Emails */i) as HTMLInputElement

        userEvent.type(input, 'New Chip').then(() =>
            fireEvent.keyDown(input, {
                key: ' '
            })
        )

        waitFor(() => {
            expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object), [
                'New Chip'
            ])
        })

        waitFor(() => {
            expect(input.value).toBe('')
        })
    })

    it('should add a chip when semicolon is pressed', () => {
        render(<MultipleField onChange={mockOnChange} />)

        const input = screen.getByLabelText(/Emails */i) as HTMLInputElement

        userEvent.type(input, 'New Chip').then(() =>
            fireEvent.keyDown(input, {
                key: ';'
            })
        )

        waitFor(() => {
            expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object), [
                'New Chip'
            ])
        })

        waitFor(() => {
            expect(input.value).toBe('')
        })
    })

    it('should not add a chip when a non-special key is pressed', () => {
        render(<MultipleField onChange={mockOnChange} />)

        const input = screen.getByLabelText(/Emails */i) as HTMLInputElement

        userEvent.type(input, 'New Chip{a}').then(() =>
            fireEvent.keyDown(input, {
                key: 'a'
            })
        )

        waitFor(() => {
            expect(mockOnChange).not.toHaveBeenCalled()
        })

        waitFor(() => {
            expect(input.value).toBe('New Chipa')
        })
    })

    it('should not add a chip if input is empty', () => {
        render(<MultipleField onChange={mockOnChange} />)

        const input = screen.getByLabelText(/Emails */i) as HTMLInputElement

        userEvent.type(input, '').then(() =>
            fireEvent.keyDown(input, {
                key: 'Enter'
            })
        )

        waitFor(() => {
            expect(mockOnChange).not.toHaveBeenCalled()
        })

        waitFor(() => {
            expect(input.value).toBe('')
        })
    })

    it('should call onChange with the correct values when multiple keys are pressed', () => {
        render(<MultipleField onChange={mockOnChange} />)

        const input = screen.getByLabelText(/Emails */i) as HTMLInputElement

        userEvent.type(input, 'Chip 1{comma}Chip 2{enter}')

        waitFor(() => {
            expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object), [
                'Chip 1',
                'Chip 2'
            ])
        })

        waitFor(() => {
            expect(input.value).toBe('')
        })
    })

    it('should match snapshot', () => {
        const { container } = render(<MultipleField onChange={mockOnChange} />)

        expect(container).toMatchSnapshot()
    })
})
