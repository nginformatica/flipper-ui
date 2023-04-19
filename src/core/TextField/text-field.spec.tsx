import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import TextField from '@/test/mocks/text-field-mock'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

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

        const helperBox = screen.getByRole('helper-box')

        await act(
            async () =>
                await userEvent.click(helperBox.firstElementChild || helperBox)
        )

        expect(onHelperClick).toBeCalled()
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

        const clearBtn = screen.getByRole('clear-button')

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
})
