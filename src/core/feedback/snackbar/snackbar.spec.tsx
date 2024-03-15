import React from 'react'
import { act } from 'react-dom/test-utils'
import { render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import Snackbar from '@/test/mocks/snackbar-mock'

describe('Snackbar', () => {
    it('should render a Snackbar', async () => {
        render(<Snackbar snackProps={{ message: 'Snackbar Message' }} />)

        const btn = screen.getByTestId('snackbar-button')

        await act(async () => {
            await userEvent.click(btn)
        })

        const message = screen.getByText('Snackbar Message')

        expect(message).toBeDefined()
    })

    it('should render with action', async () => {
        const onClose = jest.fn()

        render(
            <Snackbar
                withAction
                snackProps={{ message: 'Snackbar Message', onClose }}
            />
        )

        const btn = screen.getByTestId('snackbar-button')

        await act(async () => {
            await userEvent.click(btn)
        })

        const closeBtn = screen.getByRole('close-icon-button')

        await act(async () => {
            await userEvent.click(closeBtn)
        })

        await waitFor(() => expect(onClose).toHaveBeenCalled())
    })

    it('should call onClick', async () => {
        const onClick = jest.fn()

        render(
            <Snackbar
                snackProps={{
                    message: 'Snackbar Message',
                    autoHide: 100,
                    onClick
                }}
            />
        )

        const btn = screen.getByTestId('snackbar-button')

        await act(async () => {
            await userEvent.click(btn)
        })

        const message = screen.getByText('Snackbar Message')

        await act(async () => {
            await userEvent.click(message)
        })

        await waitFor(() => expect(onClick).toHaveBeenCalled())
    })

    it('should call onClose', async () => {
        const onClose = jest.fn()

        render(
            <Snackbar
                snackProps={{
                    message: 'Snackbar Message',
                    autoHide: 100,
                    onClose
                }}
            />
        )

        const btn = screen.getByTestId('snackbar-button')

        await act(async () => {
            await userEvent.click(btn)
        })

        const closeBtn = screen.getByRole('close-icon-button')

        await act(async () => {
            await userEvent.click(closeBtn)
        })

        await waitFor(() => expect(onClose).toHaveBeenCalled())
    })

    it('should match snapshot', () => {
        const onClick = jest.fn()
        const onClose = jest.fn()

        const { container } = render(
            <Snackbar
                withAction
                snackProps={{
                    message: 'Snackbar Message',
                    onClick,
                    onClose
                }}
            />
        )

        expect(container).toMatchSnapshot()
    })
})
