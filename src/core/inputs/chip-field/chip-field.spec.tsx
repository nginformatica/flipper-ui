import * as React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import ChipField from '.'

describe('ChipField', () => {
    const values = [{ value: 'alpha' }, { value: 'beta' }, { value: 'gamma' }]
    it('should render', () => {
        render(
            <ChipField
                data-testid='chip-field-container'
                onAdd={jest.fn}
                onDelete={jest.fn}
                values={[]}
            />
        )

        const chipFieldContainer = screen.getByTestId('chip-field-container')

        expect(chipFieldContainer).toBeDefined()
    })

    it('should render with values', () => {
        render(
            <ChipField
                data-testid='chip-field-container'
                onAdd={jest.fn}
                onDelete={jest.fn}
                values={values}
            />
        )

        const chips = screen.getAllByRole('button')

        expect(chips).toHaveLength(values.length)
    })

    it('should remove from values', async () => {
        const onDelete = jest.fn()
        render(
            <ChipField
                data-testid='chip-field-container'
                onAdd={jest.fn}
                onDelete={onDelete}
                values={values}
            />
        )

        const chips = screen.getAllByRole('button')
        const lastChip = chips[chips.length - 1]

        const deleteButton = lastChip.querySelector('svg')

        fireEvent.click(deleteButton || lastChip)

        await waitFor(() => {
            expect(onDelete).toHaveBeenCalledWith('gamma', 2)
        })
    })
})
