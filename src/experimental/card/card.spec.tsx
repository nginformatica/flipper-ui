import * as React from 'react'
import { render, screen } from '@testing-library/react'
import type { ButtonProps } from '@/core/inputs/button'
import type { IconButtonProps } from '@/core/inputs/icon-button'
import { Card } from '.'

describe('Card', () => {
    it('should render', () => {
        render(
            <Card name='test' data-testid='card'>
                <h1>test</h1>
            </Card>
        )
        const card = screen.getByTestId('card')

        expect(card).toBeDefined()
        expect(card).toHaveProperty('style.padding', '24px')
    })

    it('should render nested', () => {
        render(
            <Card nested name='test' data-testid='card'>
                <h1>test</h1>
            </Card>
        )
        const card = screen.getByTestId('card')

        expect(card).toHaveProperty('style.padding', '0px')
    })

    it('should render with title', () => {
        render(
            <Card name='test' title='test-title'>
                <h1>test</h1>
            </Card>
        )
        const title = screen.getByText('test-title')

        expect(title).toBeDefined()
    })

    it('should render add button with label', () => {
        const onAddClickSpy = jest.fn()

        render(
            <Card
                name='test'
                title='test-title'
                onAddBtnLabel='add button'
                onClickAdd={onAddClickSpy}>
                <h1>test</h1>
            </Card>
        )
        const addBtn = screen.getByText('add button')

        expect(addBtn).toBeDefined()
    })

    it('should render edit button with editing state', () => {
        const onToggleEdit = jest.fn()
        const onEditProps: Partial<IconButtonProps> = {
            'data-testid': 'edit-button'
        }

        render(
            <Card
                editing
                name='test'
                data-testid='card'
                title='title'
                onToggleEdit={onToggleEdit}
                onEditProps={onEditProps}>
                <h1>test</h1>
            </Card>
        )
        const editButton = screen.getByTestId('edit-button')

        expect(editButton).toHaveProperty('name', 'cancel-test')
    })

    it('should call onClickAdd', () => {
        const onAddProps: Partial<ButtonProps> = {
            'data-testid': 'add-button'
        }
        const onClickAdd = jest.fn()

        render(
            <Card name='test' onClickAdd={onClickAdd} onAddProps={onAddProps}>
                <h1>test</h1>
            </Card>
        )
        const addButton = screen.getByTestId('add-button')

        addButton.click()
        expect(onClickAdd).toHaveBeenCalled()
    })

    it('should call onToggleEdit', () => {
        const onEditProps: Partial<IconButtonProps> = {
            'data-testid': 'edit-button'
        }
        const onToggleEdit = jest.fn()

        render(
            <Card
                name='test'
                title='test'
                onToggleEdit={onToggleEdit}
                onEditProps={onEditProps}>
                <h1>test</h1>
            </Card>
        )
        const editButton = screen.getByTestId('edit-button')

        editButton.click()
        expect(onToggleEdit).toHaveBeenCalled()
        expect(editButton).toHaveProperty('name', 'edit-test')
    })
})
