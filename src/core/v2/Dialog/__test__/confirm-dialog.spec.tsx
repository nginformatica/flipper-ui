import * as React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ConfirmDialog from '../ConfirmDialog'

describe('ConfirmDialog', () => {
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
            <ConfirmDialog
                open
                title={TITLE}
                text={TEXT}
                labels={LABELS}
                onCancel={onCancelSpy}
                onConfirm={onConfirmSpy}
            />
        )

        const title = screen.getByText(TITLE)
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
            <ConfirmDialog
                open
                title={TITLE}
                text={TEXT}
                onCancel={onCancelSpy}
                onConfirm={onConfirmSpy}
            />
        )

        const title = screen.getByText(TITLE)
        const text = screen.getByText(TEXT)
        const confirmButton = screen.getByText('Sim')
        const cancelButton = screen.getByText('Voltar')

        expect(title).toBeDefined()
        expect(text).toBeDefined()
        expect(confirmButton).toBeDefined()
        expect(cancelButton).toBeDefined()
    })

    it('Should call primaryButtonAction', () => {
        const onCancelSpy = jest.fn()
        const onConfirmSpy = jest.fn()

        render(
            <ConfirmDialog
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

        waitFor(() => {
            expect(onConfirmSpy).toHaveBeenCalled()
        })
    })

    it('Should call secondaryButtonAction', () => {
        const onCancelSpy = jest.fn()
        const onConfirmSpy = jest.fn()

        render(
            <ConfirmDialog
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

        waitFor(() => {
            expect(onCancelSpy).toHaveBeenCalled()
        })
    })

    it('Should call onCancel', () => {
        const onCancelSpy = jest.fn()
        const onConfirmSpy = jest.fn()

        render(
            <ConfirmDialog
                open
                title={TITLE}
                text={TEXT}
                labels={LABELS}
                onCancel={onCancelSpy}
                onConfirm={onConfirmSpy}
            />
        )

        const title = screen.getByText(TITLE)

        fireEvent.keyDown(title, { key: 'Escape', keyCode: 27 })

        waitFor(() => {
            expect(onCancelSpy).toHaveBeenCalled()
        })
    })
})
