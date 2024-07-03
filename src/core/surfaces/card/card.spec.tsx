import React from 'react'
import { render, screen } from '@testing-library/react'
import type { IButtonProps } from '@/core/inputs/button'
import type { IconButtonProps } from '@/core/inputs/icon-button'
import Card from '.'
import '@testing-library/jest-dom'

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
                label='add button'
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

    it('should render remove button ', () => {
        const onRemove = jest.fn()
        const onRemoveProps: Partial<IconButtonProps> = {
            'data-testid': 'remove-button'
        }

        render(
            <Card
                editing
                renderRemove
                name='test'
                data-testid='card'
                title='title'
                onRemoveProps={onRemoveProps}
                onRemove={onRemove}>
                <h1>test</h1>
            </Card>
        )

        const removeButton = screen.getByTestId('remove-button')

        expect(removeButton).toHaveProperty('name', 'remove-test')
    })

    it('should not contain className', () => {
        const onRemove = jest.fn()
        const onRemoveProps: Partial<IconButtonProps> = {
            'data-testid': 'remove-button'
        }

        render(
            <Card
                renderRemove
                name='test'
                data-testid='card'
                title='title'
                onRemoveProps={onRemoveProps}
                onRemove={onRemove}>
                <h1>test</h1>
            </Card>
        )

        const removeButton = screen.getByTestId('remove-button')

        expect(removeButton).toHaveClass('showable-target')
    })

    it('should call onClickAdd', () => {
        const onAddProps: Partial<IButtonProps> = {
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

    it('should match snapshot', () => {
        const onEditProps: Partial<IconButtonProps> = {
            'data-testid': 'edit-button'
        }
        const onRemoveProps: Partial<IconButtonProps> = {
            'data-testid': 'remove-button'
        }

        const { container } = render(
            <Card
                editing
                renderRemove
                name='test'
                data-testid='card'
                title='title'
                label='add button'
                onClickAdd={jest.fn()}
                onToggleEdit={jest.fn()}
                onEditProps={onEditProps}
                onRemoveProps={onRemoveProps}
                onRemove={jest.fn()}>
                <h1>test</h1>
            </Card>
        )

        expect(container).toMatchSnapshot()
    })
})
