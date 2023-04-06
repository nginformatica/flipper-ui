import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Actions from './Actions'

describe('Actions', () => {
    it('should render', () => {
        render(<Actions onConfirm={jest.fn()} />)

        const actionCancel = screen.getByText('Cancelar')
        const actionConfirm = screen.getByText('Confirmar')

        expect(actionCancel).toBeDefined()
        expect(actionConfirm).toBeDefined()
    })

    it('should render with custom labels', () => {
        render(
            <Actions
                labels={{ cancel: 'Voltar', confirm: 'Excluir' }}
                onConfirm={jest.fn()}
            />
        )

        const actionCancel = screen.getByText('Voltar')
        const actionConfirm = screen.getByText('Excluir')

        expect(actionCancel).toBeDefined()
        expect(actionConfirm).toBeDefined()
    })

    it('should render only confirm', () => {
        render(<Actions buttons={['confirm']} onConfirm={jest.fn()} />)

        const actionConfirm = screen.getByText('Confirmar')

        waitFor(() => {
            const actionCancel = screen.getByText('Cancelar')

            expect(actionConfirm).toBeDefined()
            expect(actionCancel).not.toBeDefined()
        })
    })

    it('should render with custom names', () => {
        render(
            <Actions
                names={{ cancel: 'cancelName', confirm: 'confirmName' }}
                onConfirm={jest.fn()}
            />
        )

        const actionCancel = screen.getByTestId('cancel-action')
        const actionConfirm = screen.getByTestId('confirm-action')

        expect(actionCancel).toHaveProperty('name', 'cancelName')
        expect(actionConfirm).toHaveProperty('name', 'confirmName')
    })

    it('should call onCancel', () => {
        const onCancel = jest.fn()

        render(<Actions onCancel={onCancel} onConfirm={jest.fn()} />)

        const actionCancel = screen.getByText('Cancelar')

        actionCancel.click()

        expect(onCancel).toHaveBeenCalled()
    })

    it('should call onConfirm', () => {
        const onConfirm = jest.fn()

        render(<Actions onConfirm={onConfirm} />)

        const actionConfirm = screen.getByText('Confirmar')

        actionConfirm.click()

        expect(onConfirm).toHaveBeenCalled()
    })
})
