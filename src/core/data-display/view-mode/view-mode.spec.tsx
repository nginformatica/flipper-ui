import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import ViewMode from '.'
import '@testing-library/jest-dom'

describe('ViewMode Component', () => {
    it('should render with default settings', () => {
        render(<ViewMode />)

        expect(screen.getByTestId('TableRowsIcon')).toBeInTheDocument()
        expect(screen.getByTestId('GridViewRoundedIcon')).toBeInTheDocument()

        const buttons = screen.getAllByRole('button')

        expect(buttons).toHaveLength(2)

        expect(buttons[0]).toHaveClass('MuiButton-outlined')
        expect(buttons[1]).toHaveClass('MuiButton-contained')
    })

    it('should toggle between card and list view when clicking buttons', () => {
        let currentMode = false

        const mockSetActiveMode = jest.fn(updater => {
            if (typeof updater === 'function') {
                currentMode = updater(currentMode)
            } else {
                currentMode = updater
            }
        })

        const { rerender } = render(
            <ViewMode
                activeMode={currentMode}
                setActiveMode={mockSetActiveMode}
            />
        )

        expect(screen.getByTestId('GridViewRoundedIcon')).toBeInTheDocument()
        expect(screen.queryByTestId('TableRowsIcon')).toBeInTheDocument()

        const gridButton = screen
            .getByTestId('GridViewRoundedIcon')
            .closest('button')

        if (gridButton) {
            fireEvent.click(gridButton)
        }

        rerender(
            <ViewMode
                activeMode={currentMode}
                setActiveMode={mockSetActiveMode}
            />
        )

        expect(mockSetActiveMode).toHaveBeenCalled()
        expect(currentMode).toBe(true)
        expect(screen.getByTestId('TableRowsIcon')).toBeInTheDocument()
        expect(screen.queryByTestId('GridViewRoundedIcon')).toBeInTheDocument()

        const tableButton = screen
            .getByTestId('TableRowsIcon')
            .closest('button')

        if (tableButton) {
            fireEvent.click(tableButton)
        }

        rerender(
            <ViewMode
                activeMode={currentMode}
                setActiveMode={mockSetActiveMode}
            />
        )

        expect(mockSetActiveMode).toHaveBeenCalledTimes(2)
        expect(currentMode).toBe(false)
        expect(screen.getByTestId('GridViewRoundedIcon')).toBeInTheDocument()
        expect(screen.queryByTestId('TableRowsIcon')).toBeInTheDocument()
    })

    it('should render with custom filters', () => {
        const customFilters = [
            {
                label: 'List View',
                active: true,
                onClick: jest.fn()
            },
            {
                label: 'Grid View',
                active: false,
                onClick: jest.fn()
            }
        ]

        render(<ViewMode filters={customFilters} />)

        expect(screen.getByText('List View')).toBeInTheDocument()
        expect(screen.getByText('Grid View')).toBeInTheDocument()

        const buttons = screen.getAllByRole('button')

        expect(buttons[0]).toHaveClass('MuiButton-contained')
        expect(buttons[1]).toHaveClass('MuiButton-outlined')
    })

    it('should call custom filter onClick handlers', () => {
        const customFilters = [
            {
                label: 'List',
                active: true,
                onClick: jest.fn()
            },
            {
                label: 'Grid',
                active: false,
                onClick: jest.fn()
            }
        ]

        render(<ViewMode filters={customFilters} />)

        fireEvent.click(screen.getByText('List'))
        expect(customFilters[0].onClick).toHaveBeenCalled()

        fireEvent.click(screen.getByText('Grid'))
        expect(customFilters[1].onClick).toHaveBeenCalled()
    })
})
