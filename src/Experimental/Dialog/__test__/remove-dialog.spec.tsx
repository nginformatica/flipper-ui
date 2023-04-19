import * as React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RemoveDialog from '../RemoveDialog'

describe('RemoveDialog', () => {
    const TITLE = 'dialog title'
    const TEXT = 'Dialog text'
    const LABELS = {
        cancel: 'cancel',
        confirm: 'confirm'
    }

    it('Should render component', () => {
        const onCancelSpy = jest.fn()
        const onConfirmSpy = jest.fn()

        render(
            <RemoveDialog
                open
                title={TITLE}
                text={TEXT}
                labels={LABELS}
                onCancel={onCancelSpy}
                onConfirm={onConfirmSpy}
            />
        )

        const title = screen.getByText(TITLE.toUpperCase())
        const text = screen.getByText(TEXT)
        const confirmButton = screen.getByText(LABELS.confirm)
        const cancelButton = screen.getByText(LABELS.cancel)

        expect(title).toBeDefined()
        expect(text).toBeDefined()
        expect(confirmButton).toBeDefined()
        expect(cancelButton).toBeDefined()
    })

    it('Should render component with default labels', () => {
        const onCancelSpy = jest.fn()
        const onConfirmSpy = jest.fn()

        render(
            <RemoveDialog
                open
                text={TEXT}
                onCancel={onCancelSpy}
                onConfirm={onConfirmSpy}
            />
        )

        const title = screen.getByText('EXCLUIR')
        const text = screen.getByText(TEXT)
        const confirmButton = screen.getByText('Excluir')
        const cancelButton = screen.getByText('Cancelar')

        expect(title).toBeDefined()
        expect(text).toBeDefined()
        expect(confirmButton).toBeDefined()
        expect(cancelButton).toBeDefined()
    })

    it('Should call primaryButtonAction', async () => {
        const onCancelSpy = jest.fn()
        const onConfirmSpy = jest.fn()

        render(
            <RemoveDialog
                open
                title={TITLE}
                text={TEXT}
                labels={LABELS}
                onCancel={onCancelSpy}
                onConfirm={onConfirmSpy}
            />
        )

        const confirmButton = screen.getByText(LABELS.confirm)

        userEvent.click(confirmButton)

        await waitFor(() => {
            expect(onConfirmSpy).toHaveBeenCalled()
        })
    })

    it('Should call secondaryButtonAction', async () => {
        const onCancelSpy = jest.fn()
        const onConfirmSpy = jest.fn()

        render(
            <RemoveDialog
                open
                title={TITLE}
                text={TEXT}
                labels={LABELS}
                onCancel={onCancelSpy}
                onConfirm={onConfirmSpy}
            />
        )

        const cancelButton = screen.getByText(LABELS.cancel)

        userEvent.click(cancelButton)

        await waitFor(() => {
            expect(onCancelSpy).toHaveBeenCalled()
        })
    })

    it('Should call onCancel', async () => {
        const onCancelSpy = jest.fn()
        const onConfirmSpy = jest.fn()

        render(
            <RemoveDialog
                open
                title={TITLE}
                text={TEXT}
                labels={LABELS}
                onCancel={onCancelSpy}
                onConfirm={onConfirmSpy}
            />
        )

        const title = screen.getByText(TITLE.toUpperCase())

        fireEvent.keyDown(title, { key: 'Escape', keyCode: 27 })

        await waitFor(() => {
            expect(onCancelSpy).toHaveBeenCalled()
        })
    })

    it('Should not call onCancel when disableBackdropClick', async () => {
        const onCancelSpy = jest.fn()
        const onConfirmSpy = jest.fn()

        render(
            <RemoveDialog
                open
                disableBackdropClick
                title={TITLE}
                text={TEXT}
                labels={LABELS}
                onCancel={onCancelSpy}
                onConfirm={onConfirmSpy}
            />
        )

        const title = screen.getByText(TITLE.toUpperCase())

        fireEvent.keyDown(title, { key: 'Escape', keyCode: 27 })

        await waitFor(() => {
            expect(onCancelSpy).not.toHaveBeenCalled()
        })
    })
})
