import React from 'react'
import { render, screen } from '@testing-library/react'
import type { IActionsProps } from '.'
import Actions from '.'
import '@testing-library/jest-dom'

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
        const actionCancel = screen.queryByText('Cancelar')

        expect(actionConfirm).toBeDefined()
        expect(actionCancel).toBeNull()
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

    it('should replace the pair when custom actions are informed', () => {
        render(
            <Actions
                customActions={[
                    { label: 'Exportar', name: 'export', onClick: jest.fn() },
                    { label: 'Imprimir', name: 'print', onClick: jest.fn() }
                ]}
                onConfirm={jest.fn()}
            />
        )

        const buttons = screen.getAllByRole('button')

        expect(buttons.map(it => it.textContent)).toEqual([
            'Exportar',
            'Imprimir'
        ])
    })

    it('should keep the pair when customActions is empty', () => {
        render(<Actions customActions={[]} onConfirm={jest.fn()} />)

        const buttons = screen.getAllByRole('button')

        expect(buttons.map(it => it.textContent)).toEqual([
            'Cancelar',
            'Confirmar'
        ])
    })

    it('should call the custom action onClick', () => {
        const onClick = jest.fn()

        render(
            <Actions
                customActions={[{ label: 'Restaurar', name: 'reset', onClick }]}
                onConfirm={jest.fn()}
            />
        )

        screen.getByTestId('reset').click()

        expect(onClick).toHaveBeenCalled()
    })

    it('should not render custom actions when readonly', () => {
        render(
            <Actions
                readonly
                customActions={[
                    { label: 'Restaurar', name: 'reset', onClick: jest.fn() }
                ]}
                onConfirm={jest.fn()}
            />
        )

        expect(screen.queryByText('Restaurar')).toBeNull()
    })

    it('should expose the action bar as a labelled group', () => {
        render(<Actions onConfirm={jest.fn()} />)

        expect(screen.getByRole('group', { name: 'Ações' })).toBeDefined()
    })

    it('should render with a custom group label', () => {
        render(<Actions ariaLabel='Ações do cadastro' onConfirm={jest.fn()} />)

        expect(
            screen.getByRole('group', { name: 'Ações do cadastro' })
        ).toBeDefined()
    })

    it('should name an icon only custom action through aria-label', () => {
        render(
            <Actions
                customActions={[
                    {
                        icon: <svg />,
                        name: 'export',
                        'aria-label': 'Exportar planilha',
                        onClick: jest.fn()
                    }
                ]}
                onConfirm={jest.fn()}
            />
        )

        expect(
            screen.getByRole('button', { name: 'Exportar planilha' })
        ).toBeDefined()
    })

    it('should center the buttons so an icon does not stretch the row', () => {
        render(
            <Actions
                customActions={[
                    {
                        icon: <svg />,
                        name: 'icon',
                        'aria-label': 'Ícone',
                        onClick: jest.fn()
                    },
                    { label: 'Texto', name: 'text', onClick: jest.fn() }
                ]}
                onConfirm={jest.fn()}
            />
        )

        const wrapper = screen.getByRole('group')

        expect(getComputedStyle(wrapper).alignItems).toBe('center')
        expect(screen.getByTestId('icon').className).toContain(
            'MuiIconButton-sizeSmall'
        )
    })

    it('should render an icon action as IconButton, not Button', () => {
        render(
            <Actions
                customActions={[
                    {
                        icon: <svg />,
                        name: 'print',
                        'aria-label': 'Imprimir',
                        onClick: jest.fn()
                    },
                    {
                        label: 'Exportar',
                        name: 'export',
                        onClick: jest.fn()
                    }
                ]}
                onConfirm={jest.fn()}
            />
        )

        const iconAction = screen.getByTestId('print')
        const labelAction = screen.getByTestId('export')

        expect(iconAction.className).toContain('MuiIconButton-root')
        expect(iconAction.className).not.toContain('MuiButton-root')

        expect(labelAction.className).toContain('MuiButton-root')
        expect(labelAction.className).not.toContain('MuiIconButton-root')
    })

    it.each([
        ['with the whole pair', undefined],
        ['without cancel', ['confirm']],
        ['without confirm', ['cancel']]
    ])('should let the container own the spacing — %s', (_, buttons) => {
        const { container } = render(
            <Actions
                buttons={buttons as IActionsProps['buttons']}
                customActions={[
                    { label: 'E1', name: 'e1', onClick: jest.fn() },
                    {
                        icon: <svg />,
                        name: 'e2',
                        'aria-label': 'E2',
                        onClick: jest.fn()
                    }
                ]}
                onCancel={jest.fn()}
                onConfirm={jest.fn()}
            />
        )

        const wrapper = screen.getByRole('group')
        const rendered = Array.from(container.querySelectorAll('button'))

        expect(getComputedStyle(wrapper).gap).toBe('8px')
        expect(rendered.length).toBeGreaterThan(1)

        rendered.forEach(button => {
            expect(button.style.margin).toBe('')
            expect(button.style.marginLeft).toBe('')
            expect(button.style.marginRight).toBe('')
        })
    })

    it('should forward size and padding to a label custom action', () => {
        render(
            <Actions
                customActions={[
                    {
                        label: 'Pequeno',
                        name: 'small',
                        size: 'small',
                        padding: '2px 10px',
                        onClick: jest.fn()
                    },
                    {
                        label: 'Grande',
                        name: 'large',
                        size: 'large',
                        onClick: jest.fn()
                    },
                    { label: 'Padrão', name: 'default', onClick: jest.fn() }
                ]}
                onConfirm={jest.fn()}
            />
        )

        expect(screen.getByTestId('small').className).toContain(
            'MuiButton-sizeSmall'
        )
        expect(screen.getByTestId('small')).toHaveStyle({
            padding: '2px 10px'
        })
        expect(screen.getByTestId('large').className).toContain(
            'MuiButton-sizeLarge'
        )
        expect(screen.getByTestId('default').className).toContain(
            'MuiButton-sizeMedium'
        )
    })

    it('should forward size and padding to an icon custom action', () => {
        render(
            <Actions
                customActions={[
                    {
                        icon: <svg />,
                        name: 'large',
                        size: 'large',
                        padding: '10px',
                        'aria-label': 'Grande',
                        onClick: jest.fn()
                    },
                    {
                        icon: <svg />,
                        name: 'default',
                        'aria-label': 'Padrão',
                        onClick: jest.fn()
                    }
                ]}
                onConfirm={jest.fn()}
            />
        )

        expect(screen.getByTestId('large').className).toContain(
            'MuiIconButton-sizeLarge'
        )
        expect(screen.getByTestId('large')).toHaveStyle({ padding: '10px' })
        expect(screen.getByTestId('default').className).toContain(
            'MuiIconButton-sizeSmall'
        )
    })

    it('should size the cancel/confirm pair', () => {
        const { rerender } = render(<Actions onConfirm={jest.fn()} />)

        expect(screen.getByTestId('cancel-action').className).toContain(
            'MuiButton-sizeMedium'
        )
        expect(screen.getByTestId('confirm-action').className).toContain(
            'MuiButton-sizeMedium'
        )

        rerender(<Actions size='large' onConfirm={jest.fn()} />)

        expect(screen.getByTestId('cancel-action').className).toContain(
            'MuiButton-sizeLarge'
        )
        expect(screen.getByTestId('confirm-action').className).toContain(
            'MuiButton-sizeLarge'
        )
    })

    it.each([
        ['default pair', {}, ['Cancelar', 'Confirmar']],
        ['only confirm', { buttons: ['confirm'] }, ['Confirmar']],
        ['only cancel', { buttons: ['cancel'] }, ['Cancelar']],
        ['readonly keeps only cancel', { readonly: true }, ['Cancelar']],
        [
            'custom actions replace the pair',
            {
                customActions: [
                    { label: 'Exportar', name: 'a', onClick: jest.fn() },
                    { label: 'Imprimir', name: 'b', onClick: jest.fn() },
                    { label: 'Publicar', name: 'c', onClick: jest.fn() }
                ]
            },
            ['Exportar', 'Imprimir', 'Publicar']
        ],
        [
            'colors and variants',
            {
                customActions: [
                    {
                        label: 'Excluir',
                        name: 'a',
                        color: 'error' as const,
                        onClick: jest.fn()
                    },
                    {
                        label: 'Publicar',
                        name: 'b',
                        color: 'success' as const,
                        variant: 'contained' as const,
                        onClick: jest.fn()
                    }
                ]
            },
            ['Excluir', 'Publicar']
        ],
        [
            'icon and label side by side',
            {
                customActions: [
                    {
                        icon: <svg />,
                        name: 'a',
                        'aria-label': 'Baixar',
                        onClick: jest.fn()
                    },
                    { label: 'Exportar', name: 'b', onClick: jest.fn() }
                ]
            },
            ['Baixar', 'Exportar']
        ],
        [
            'readonly hides the custom actions too',
            {
                readonly: true,
                customActions: [
                    { label: 'Exportar', name: 'a', onClick: jest.fn() }
                ]
            },
            []
        ]
    ])('should render the %s configuration', (_, extra, expected) => {
        const { container } = render(
            <Actions {...(extra as IActionsProps)} onConfirm={jest.fn()} />
        )

        const names = Array.from(container.querySelectorAll('button')).map(
            button => button.getAttribute('aria-label') || button.textContent
        )

        expect(names).toEqual(expected)
    })

    it('should reach the custom actions with the global disabled', () => {
        render(
            <Actions
                disabled
                customActions={[
                    { label: 'Exportar', name: 'export', onClick: jest.fn() },
                    {
                        icon: <svg />,
                        name: 'print',
                        'aria-label': 'Imprimir',
                        onClick: jest.fn()
                    }
                ]}
                onConfirm={jest.fn()}
            />
        )

        expect(screen.getByTestId('export')).toBeDisabled()
        expect(screen.getByTestId('print')).toBeDisabled()
    })

    it('should render custom actions with no name informed', () => {
        render(
            <Actions
                customActions={[
                    { label: 'Exportar', onClick: jest.fn() },
                    {
                        icon: <svg />,
                        'aria-label': 'Imprimir',
                        onClick: jest.fn()
                    }
                ]}
                onConfirm={jest.fn()}
            />
        )

        expect(screen.getByRole('button', { name: 'Exportar' })).toBeDefined()
        expect(screen.getByRole('button', { name: 'Imprimir' })).toBeDefined()
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Actions
                labels={{ cancel: 'Voltar', confirm: 'Excluir' }}
                onConfirm={jest.fn()}
            />
        )

        expect(container).toMatchSnapshot()
    })
})
