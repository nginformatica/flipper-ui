import React, { act } from 'react'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import Select from '@/test/mocks/select-mock'
import MuiSelect from '.'

describe('Select', () => {
    it('should render', async () => {
        render(<Select initialValue='0' />)

        const container = screen.getByText('Option 0')

        await act(async () => await userEvent.click(container))

        const options = screen.getAllByRole('option')

        expect(options.length).toBe(3)
    })

    it('should update value', async () => {
        render(<Select initialValue='0' />)

        const container = screen.getByText('Option 0')

        await act(async () => await userEvent.click(container))

        const option = screen.getByText('Option 1')

        await act(async () => await userEvent.click(option))

        expect((container as HTMLDivElement).innerHTML).toBe('Option 1')
    })

    it('should call onChange with correct values', async () => {
        const onChangeSpy = jest.fn()

        render(
            <Select initialValue='0' selectProps={{ onChange: onChangeSpy }} />
        )

        const container = screen.getByText('Option 0')

        await act(async () => await userEvent.click(container))

        const option = screen.getByText('Option 1')

        await act(async () => await userEvent.click(option))

        expect(onChangeSpy).toHaveBeenCalledWith(
            expect.objectContaining({
                target: { value: '1', name: undefined }
            })
        )
    })

    it('should render with clear button', async () => {
        render(<Select initialValue='1' selectProps={{ hasClear: true }} />)

        screen.getByText('Option 1')

        const clearButton = screen.getByRole('end-adornment-component')

        await act(async () => await userEvent.click(clearButton))

        const input = screen.getByTestId('select-input') as HTMLInputElement

        expect(input.value).toBe('')
    })

    it('should match snapshot', () => {
        const { container } = render(
            <MuiSelect hasClear value='1' onChange={jest.fn()}>
                <div>Olá</div>
            </MuiSelect>
        )

        expect(container).toMatchSnapshot()
    })
})
