import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { IconFileCopy } from '@/icons/mui-icons'
import Fab from '.'

describe('Fab', () => {
    it('should render', () => {
        render(
            <Fab mini onClick={jest.fn()}>
                <IconFileCopy />
            </Fab>
        )

        const container = screen.getByTestId('fab-button')

        expect(container.classList).toContain('MuiFab-sizeSmall')
    })

    it('should render medium', () => {
        render(
            <Fab onClick={jest.fn()}>
                <IconFileCopy />
            </Fab>
        )

        const container = screen.getByTestId('fab-button')

        expect(container.classList).toContain('MuiFab-sizeMedium')
    })

    it('should call onClick', async () => {
        const onClickSpy = jest.fn()

        render(
            <Fab onClick={onClickSpy}>
                <IconFileCopy />
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
                <IconFileCopy />
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
                <IconFileCopy />
            </Fab>
        )

        expect(container).toMatchSnapshot()
    })
})
