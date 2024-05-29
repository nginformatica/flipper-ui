import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import ConfirmDialog from './confirm-dialog'
import DialogV2 from './dialog'
import RemoveDialog from './remove-dialog'

describe('Dialog', () => {
    it('should render', () => {
        const onClickSpy = jest.fn()

        render(
            <DialogV2
                open
                title='dialog title'
                text='Dialog text'
                primaryButtonText='Close'
                primaryButtonAction={onClickSpy}
            />
        )

        const title = screen.getByText('dialog title')
        const text = screen.getByText('Dialog text')
        const primaryButton = screen.getByText('Close')

        expect(title).toBeDefined()
        expect(text).toBeDefined()
        expect(primaryButton).toBeDefined()
    })

    it('should call primaryButtonAction', async () => {
        const onClickSpy = jest.fn()

        render(
            <DialogV2
                open
                title='dialog title'
                text='Dialog text'
                primaryButtonText='Close'
                primaryButtonAction={onClickSpy}
            />
        )

        const primaryButton = screen.getByText('Close')

        userEvent.click(primaryButton)

        await waitFor(() => {
            expect(onClickSpy).toHaveBeenCalled()
        })
    })

    it('should call secondaryButtonAction', async () => {
        const onClickSpy = jest.fn()

        render(
            <DialogV2
                open
                title='dialog title'
                text='Dialog text'
                primaryButtonText='Close'
                secondaryButtonText='secondary'
                primaryButtonAction={onClickSpy}
                secondaryButtonAction={onClickSpy}
            />
        )

        const secondaryButton = screen.getByText('secondary')

        userEvent.click(secondaryButton)

        await waitFor(() => {
            expect(onClickSpy).toHaveBeenCalled()
        })
    })

    it('should render confirm dialog with default labels', () => {
        const onCancelSpy = jest.fn()
        const onConfirmSpy = jest.fn()

        render(
            <ConfirmDialog
                open
                title='dialog title'
                text='Dialog text'
                onCancel={onCancelSpy}
                onConfirm={onConfirmSpy}
            />
        )

        const title = screen.getByText('dialog title')
        const text = screen.getByText('Dialog text')
        const confirmButton = screen.getByText('Sim')
        const cancelButton = screen.getByText('Voltar')

        expect(title).toBeDefined()
        expect(text).toBeDefined()
        expect(confirmButton).toBeDefined()
        expect(cancelButton).toBeDefined()
    })

    it('should render confirm dialog with custom labels', () => {
        const onCancelSpy = jest.fn()
        const onConfirmSpy = jest.fn()

        render(
            <ConfirmDialog
                open
                title='dialog title'
                text='Dialog text'
                labels={{
                    cancel: 'cancel',
                    confirm: 'confirm'
                }}
                onCancel={onCancelSpy}
                onConfirm={onConfirmSpy}
            />
        )

        const confirmButton = screen.getByText('confirm')
        const cancelButton = screen.getByText('cancel')

        expect(confirmButton).toBeDefined()
        expect(cancelButton).toBeDefined()
    })

    it('should call onConfirm when clicked', async () => {
        const onCancelSpy = jest.fn()
        const onConfirmSpy = jest.fn()

        render(
            <ConfirmDialog
                open
                title='dialog title'
                text='Dialog text'
                labels={{
                    cancel: 'cancel',
                    confirm: 'confirm'
                }}
                onCancel={onCancelSpy}
                onConfirm={onConfirmSpy}
            />
        )

        const confirmButton = screen.getByText('confirm')

        userEvent.click(confirmButton)

        await waitFor(() => {
            expect(onConfirmSpy).toHaveBeenCalled()
        })
    })

    it('should call onCancel when clicked', async () => {
        const onCancelSpy = jest.fn()
        const onConfirmSpy = jest.fn()

        render(
            <ConfirmDialog
                open
                title='dialog title'
                text='Dialog text'
                labels={{
                    cancel: 'cancel',
                    confirm: 'confirm'
                }}
                onCancel={onCancelSpy}
                onConfirm={onConfirmSpy}
            />
        )

        const cancelButton = screen.getByText('cancel')

        userEvent.click(cancelButton)

        await waitFor(() => {
            expect(onCancelSpy).toHaveBeenCalled()
        })
    })

    it('should call onCancel when Esc is pressed', async () => {
        const onCancelSpy = jest.fn()
        const onConfirmSpy = jest.fn()

        render(
            <ConfirmDialog
                open
                title='dialog title'
                text='Dialog text'
                labels={{
                    cancel: 'cancel',
                    confirm: 'confirm'
                }}
                onCancel={onCancelSpy}
                onConfirm={onConfirmSpy}
            />
        )

        const title = screen.getByText('dialog title')

        fireEvent.keyDown(title, { key: 'Escape', keyCode: 27 })

        await waitFor(() => {
            expect(onCancelSpy).toHaveBeenCalled()
        })
    })

    it('should not call onCancel when disableBackdropClick', async () => {
        const onCancelSpy = jest.fn()
        const onConfirmSpy = jest.fn()

        render(
            <ConfirmDialog
                open
                disableBackdropClick
                title='dialog title'
                text='Dialog text'
                labels={{
                    cancel: 'cancel',
                    confirm: 'confirm'
                }}
                onCancel={onCancelSpy}
                onConfirm={onConfirmSpy}
            />
        )

        const title = screen.getByText('dialog title')

        fireEvent.keyDown(title, { key: 'Escape', keyCode: 27 })

        await waitFor(() => {
            expect(onCancelSpy).not.toHaveBeenCalled()
        })
    })

    it('should render remove dialog with default labels', () => {
        const onCancelSpy = jest.fn()
        const onConfirmSpy = jest.fn()

        render(
            <RemoveDialog
                open
                text='Dialog text'
                onCancel={onCancelSpy}
                onConfirm={onConfirmSpy}
            />
        )

        const title = screen.getByText('EXCLUIR')
        const text = screen.getByText('Dialog text')
        const confirmButton = screen.getByText('Excluir')
        const cancelButton = screen.getByText('Cancelar')

        expect(title).toBeDefined()
        expect(text).toBeDefined()
        expect(confirmButton).toBeDefined()
        expect(cancelButton).toBeDefined()
    })

    it('Should render component', () => {
        const onCancelSpy = jest.fn()
        const onConfirmSpy = jest.fn()

        render(
            <RemoveDialog
                open
                title='dialog title'
                text='Dialog text'
                labels={{
                    cancel: 'cancel',
                    confirm: 'confirm'
                }}
                onCancel={onCancelSpy}
                onConfirm={onConfirmSpy}
            />
        )

        const title = screen.getByText('dialog title'.toUpperCase())
        const text = screen.getByText('Dialog text')
        const confirmButton = screen.getByText('confirm')
        const cancelButton = screen.getByText('cancel')

        expect(title).toBeDefined()
        expect(text).toBeDefined()
        expect(confirmButton).toBeDefined()
        expect(cancelButton).toBeDefined()
    })

    it('should call onConfirm when clicked', async () => {
        const onCancelSpy = jest.fn()
        const onConfirmSpy = jest.fn()

        render(
            <RemoveDialog
                open
                title='dialog title'
                text='Dialog text'
                labels={{
                    cancel: 'cancel',
                    confirm: 'confirm'
                }}
                onCancel={onCancelSpy}
                onConfirm={onConfirmSpy}
            />
        )

        const confirmButton = screen.getByText('confirm')

        userEvent.click(confirmButton)

        await waitFor(() => {
            expect(onConfirmSpy).toHaveBeenCalled()
        })
    })

    it('should call onCancel when clicked', async () => {
        const onCancelSpy = jest.fn()
        const onConfirmSpy = jest.fn()

        render(
            <RemoveDialog
                open
                title='dialog title'
                text='Dialog text'
                labels={{
                    cancel: 'cancel',
                    confirm: 'confirm'
                }}
                onCancel={onCancelSpy}
                onConfirm={onConfirmSpy}
            />
        )

        const cancelButton = screen.getByText('cancel')

        userEvent.click(cancelButton)

        await waitFor(() => {
            expect(onCancelSpy).toHaveBeenCalled()
        })
    })

    it('should call onCancel when Esc is pressed', async () => {
        const onCancelSpy = jest.fn()
        const onConfirmSpy = jest.fn()

        render(
            <RemoveDialog
                open
                title='dialog title'
                text='Dialog text'
                labels={{
                    cancel: 'cancel',
                    confirm: 'confirm'
                }}
                onCancel={onCancelSpy}
                onConfirm={onConfirmSpy}
            />
        )

        const title = screen.getByText('dialog title'.toUpperCase())

        fireEvent.keyDown(title, { key: 'Escape', keyCode: 27 })

        await waitFor(() => {
            expect(onCancelSpy).toHaveBeenCalled()
        })
    })

    it('should not call onCancel when disableBackdropClick', async () => {
        const onCancelSpy = jest.fn()
        const onConfirmSpy = jest.fn()

        render(
            <RemoveDialog
                open
                disableBackdropClick
                title='dialog title'
                text='Dialog text'
                labels={{
                    cancel: 'cancel',
                    confirm: 'confirm'
                }}
                onCancel={onCancelSpy}
                onConfirm={onConfirmSpy}
            />
        )

        const title = screen.getByText('dialog title'.toUpperCase())

        fireEvent.keyDown(title, { key: 'Escape', keyCode: 27 })

        await waitFor(() => {
            expect(onCancelSpy).not.toHaveBeenCalled()
        })
    })

    it('should match snapshot', () => {
        const { container } = render(
            <DialogV2
                open
                title='dialog title'
                text='Dialog text'
                primaryButtonText='Close'
                secondaryButtonText='secondary'
                primaryButtonAction={jest.fn()}
                secondaryButtonAction={jest.fn()}
            />
        )

        expect(container).toMatchSnapshot()
    })
})
