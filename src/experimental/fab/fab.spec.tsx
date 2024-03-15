import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import Fab from './fab'
import FabWrapper from './fab-wrapper'
import { FileCopy } from '@/icons'

describe('Fab', () => {
    it('should render', () => {
        render(
            <Fab onClick={jest.fn()}>
                <FileCopy />
            </Fab>
        )

        const container = screen.getByTestId('fab-button')

        expect(container.classList).toContain('MuiFab-sizeSmall')
    })

    it('should render large', () => {
        render(
            <Fab large onClick={jest.fn()}>
                <FileCopy />
            </Fab>
        )

        const container = screen.getByTestId('fab-button')

        expect(container.classList).toContain('MuiFab-sizeMedium')
    })

    it('should call onClick', async () => {
        const onClickSpy = jest.fn()

        render(
            <Fab onClick={onClickSpy}>
                <FileCopy />
            </Fab>
        )

        const btn = screen.getByTestId('fab-button')

        userEvent.click(btn)

        await waitFor(() => {
            expect(onClickSpy).toHaveBeenCalled()
        })
    })

    it('should show tooltip', async () => {
        const onClickSpy = jest.fn()

        render(
            <Fab tooltip='tooltip-test' onClick={onClickSpy}>
                <FileCopy />
            </Fab>
        )

        const btn = screen.getByTestId('fab-button')

        await waitFor(() => userEvent.hover(btn))
        const tooltip = await waitFor(() => screen.getByText('tooltip-test'))

        expect(tooltip).toBeDefined()
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Fab tooltip='tooltip-test' onClick={jest.fn()}>
                <FileCopy />
            </Fab>
        )

        expect(container).toMatchSnapshot()
    })
})

describe('FabWrapper', () => {
    it('should render', () => {
        render(<FabWrapper>Test</FabWrapper>)

        const fabWrapper = screen.getByText('Test')

        expect(fabWrapper).toBeDefined()
    })

    it('should match snapshot', () => {
        const { container } = render(<FabWrapper>Test</FabWrapper>)

        expect(container).toMatchSnapshot()
    })
})
