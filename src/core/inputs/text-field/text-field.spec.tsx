import React, { act } from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import '@testing-library/jest-dom'
import TextField from '@/test/mocks/text-field-mock'
import TextFieldOptions from '@/test/mocks/text-field-options-mock'

const LIST = [
    { label: 'Elm', value: 'elm' },
    { label: 'ReasonML', value: 'reasonml' },
    { label: 'Purescript', value: 'purescript' },
    { label: 'Fable', value: 'fable' }
]

describe('TextField', () => {
    it('should render', () => {
        render(<TextField inputProps={{ placeholder: 'Description' }} />)

        const textField = screen.getByPlaceholderText('Description')

        expect(textField).toBeDefined()
    })

    it('should render outlined', () => {
        render(
            <TextField
                inputProps={{ placeholder: 'Description', variant: 'outlined' }}
            />
        )

        const textField = screen.getByPlaceholderText('Description')

        expect(textField.classList).toContain('MuiOutlinedInput-input')
    })

    it('should render filled', () => {
        render(
            <TextField
                inputProps={{ placeholder: 'Description', variant: 'filled' }}
            />
        )

        const textField = screen.getByPlaceholderText('Description')

        expect(textField.classList).toContain('MuiInputBase-input')
    })

    it('should render with helper', async () => {
        const onHelperClick = jest.fn()

        render(
            <TextField
                inputProps={{
                    placeholder: 'Description',
                    onHelperClick: onHelperClick
                }}
            />
        )

        const textField = screen.getByPlaceholderText('Description')

        await userEvent.hover(textField)

        const helperBox = screen.getByTestId('helper-box')

        expect(
            screen.getByRole('button', { name: 'Ajuda' })
        ).toBeInTheDocument()

        await act(
            async () =>
                await userEvent.click(helperBox.firstElementChild || helperBox)
        )

        expect(onHelperClick).toHaveBeenCalled()
    })

    it('should trigger the helper with the keyboard', async () => {
        const onHelperClick = jest.fn()

        render(
            <TextField
                inputProps={{
                    placeholder: 'Description',
                    onHelperClick: onHelperClick
                }}
            />
        )

        const helper = screen.getByRole('button', { name: 'Ajuda' })

        helper.focus()

        expect(helper).toHaveFocus()

        await act(async () => await userEvent.keyboard('{Enter}'))

        expect(onHelperClick).toHaveBeenCalled()
    })

    it('should render select with clear button', async () => {
        render(
            <TextField
                initialOption='elm'
                inputProps={{
                    select: true,
                    placeholder: 'Description',
                    hasClear: true
                }}
            />
        )

        const textField = screen.getByPlaceholderText(
            'Description'
        ) as HTMLInputElement

        expect(textField.value).toBe('elm')

        const clearBtn = screen.getByTestId('clear-button')

        expect(clearBtn).toHaveAccessibleName('Limpar')

        await act(async () => await userEvent.click(clearBtn))

        expect(textField.value).toBe('')
    })

    it('should update on type', () => {
        render(<TextField inputProps={{ placeholder: 'Description' }} />)

        const textField = screen.getByPlaceholderText(
            'Description'
        ) as HTMLInputElement

        fireEvent.change(textField, { target: { value: 'Hello' } })

        expect(textField.value).toBe('Hello')
    })

    it('should update with options', () => {
        render(
            <TextFieldOptions
                inputProps={{ placeholder: 'Description' }}
                options={LIST}
            />
        )
        const textField = screen.getByPlaceholderText(
            'Description'
        ) as HTMLInputElement

        fireEvent.change(textField, { target: { value: '' } })

        expect(textField.value).toBe('')
    })

    it('should update with options stringfied', () => {
        render(
            <TextFieldOptions
                inputProps={{ placeholder: 'Description' }}
                options={JSON.stringify(LIST)}
            />
        )

        const textField = screen.getByPlaceholderText(
            'Description'
        ) as HTMLInputElement

        fireEvent.change(textField, { target: { value: '' } })

        expect(textField.value).toBe('')
    })

    it('should render character counter', () => {
        render(
            <TextField characters inputProps={{ placeholder: 'Description' }} />
        )

        const counter = screen.getByTestId('characters-counter')

        waitFor(() => {
            expect(counter).toBeDefined()
        })
    })

    it('should remove emojis if typed', () => {
        render(<TextField inputProps={{ placeholder: 'Description' }} />)

        const inputElement = screen.getByPlaceholderText(
            'Description'
        ) as HTMLInputElement

        fireEvent.change(inputElement, { target: { value: 'Hello World😀' } })

        expect(inputElement.value).toBe('Hello World')
    })

    it('should match snapshot', () => {
        const { container } = render(
            <TextField
                initialOption='elm'
                inputProps={{
                    select: true,
                    placeholder: 'Description',
                    hasClear: true
                }}
            />
        )

        expect(container).toMatchSnapshot()
    })
})
