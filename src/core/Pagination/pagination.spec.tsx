import * as React from 'react'
import { act, render, screen } from '@testing-library/react'
import Pagination from '.'
import userEvent from '@testing-library/user-event'

describe('Pagination', () => {
    it('should call navigation with correct values', async () => {
        const onNextSpy = jest.fn()
        const onPreviousSpy = jest.fn()
        const onNavigateSpy = jest.fn()

        render(
            <Pagination
                pages={5}
                active={1}
                onNext={onNextSpy}
                onPrevious={onPreviousSpy}
                onNavigate={onNavigateSpy}
            />
        )

        const prevButton = screen.getByTestId('prev-page-button')
        const nextButton = screen.getByTestId('next-page-button')
        const page3Button = screen.getByTestId('pagination-page-3')
        await act(async () => {
            await userEvent.click(prevButton)
            await userEvent.click(nextButton)
            await userEvent.click(page3Button)
        })

        expect(onNextSpy).toHaveBeenCalled()
        expect(onPreviousSpy).toHaveBeenCalled()
        expect(onNavigateSpy).toHaveBeenCalled()
        expect(onNavigateSpy).toHaveBeenCalledWith(3)
    })

    it('should render only one page if pages not provided', () => {
        render(
            <Pagination
                active={1}
                onNext={jest.fn()}
                onPrevious={jest.fn()}
                onNavigate={jest.fn()}
            />
        )

        const matchingElements = screen.getByTestId('pagination-page-1')

        expect(matchingElements).toBeDefined()
    })
})
