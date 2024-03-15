import React from 'react'
import { Autocomplete as AutocompleteLab } from '@material-ui/lab'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { default as userEvent } from '@testing-library/user-event'
import { TextField } from '@/core/inputs/text-field'
import '@testing-library/jest-dom'

describe('AutoCompleteLab', () => {
    it('should render', () => {
        render(
            <AutocompleteLab
                options={[
                    { label: 'Anemone', value: 'forget-me-not' },
                    { label: 'Forget me not', value: 'anemone' },
                    { label: 'Snapdragon', value: 'snapdragon' },
                    { label: 'Sunflower', value: 'sunflower' },
                    { label: 'Rose', value: 'rose' }
                ]}
                getOptionLabel={option => option.label}
                renderInput={props => (
                    <TextField
                        {...props}
                        fullWidth
                        label='Flowers'
                        placeholder='Flowers'
                        variant='outlined'
                    />
                )}
                onChange={jest.fn()}
            />
        )

        const autocomplete = screen.getByRole('combobox')

        expect(autocomplete).toBeDefined()
    })

    it('should render the correct suggestions', async () => {
        render(
            <AutocompleteLab
                options={[
                    { label: 'Anemone', value: 'forget-me-not' },
                    { label: 'Forget me not', value: 'anemone' },
                    { label: 'Snapdragon', value: 'snapdragon' },
                    { label: 'Sunflower', value: 'sunflower' },
                    { label: 'Rose', value: 'rose' }
                ]}
                getOptionLabel={option => option.label}
                renderInput={props => (
                    <TextField
                        {...props}
                        fullWidth
                        label='Flowers'
                        placeholder='Flowers'
                        variant='outlined'
                        data-testid='textfield'
                    />
                )}
                onChange={jest.fn()}
            />
        )

        await userEvent.type(screen.getByTestId('textfield'), 'An')

        await waitFor(() => {
            expect(screen.getByText('Anemone')).toBeInTheDocument()
        })
    })

    it('should call onChange with correct values when typing', () => {
        const onChangeMock = jest.fn()

        render(
            <AutocompleteLab
                options={[
                    { label: 'Anemone', value: 'forget-me-not' },
                    { label: 'Forget me not', value: 'anemone' },
                    { label: 'Snapdragon', value: 'snapdragon' },
                    { label: 'Sunflower', value: 'sunflower' },
                    { label: 'Rose', value: 'rose' }
                ]}
                getOptionLabel={option => option.label}
                renderInput={props => (
                    <TextField
                        {...props}
                        fullWidth
                        label='Flowers'
                        placeholder='Flowers'
                        variant='outlined'
                        data-testid='textfield'
                    />
                )}
                onChange={onChangeMock}
            />
        )

        const input = screen.getByPlaceholderText('Flowers')

        userEvent.type(input, 'a')

        waitFor(() => {
            expect(onChangeMock).toHaveBeenCalledWith('a')
        })
    })

    it('should call onChange with first suggestion for default', () => {
        const onChangeMock = jest.fn()

        render(
            <AutocompleteLab
                options={[
                    { label: 'Anemone', value: 'forget-me-not' },
                    { label: 'Forget me not', value: 'anemone' },
                    { label: 'Snapdragon', value: 'snapdragon' },
                    { label: 'Sunflower', value: 'sunflower' },
                    { label: 'Rose', value: 'rose' }
                ]}
                getOptionLabel={option => option.label}
                renderInput={props => (
                    <TextField
                        {...props}
                        fullWidth
                        label='Flowers'
                        placeholder='Flowers'
                        variant='outlined'
                        data-testid='textfield'
                    />
                )}
                onChange={onChangeMock}
            />
        )

        const input = screen.getByPlaceholderText('Flowers')

        fireEvent.focus(input)
        fireEvent.keyDown(input, { key: 'Enter' })

        waitFor(() => {
            expect(onChangeMock).toHaveBeenCalledWith({
                label: 'Anemone',
                value: 'forget-me-not'
            })
        })
    })
})
