import React, { act } from 'react'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { MaskFieldWrapper } from '@/test/mocks/mask-field'
import MaskField from '.'

describe('MaskField', () => {
    it('should render with default TextField without customInput', async () => {
        render(<MaskField placeholder='Description' />)

        const input = screen.getByPlaceholderText(
            'Description'
        ) as HTMLInputElement

        await act(async () => await userEvent.type(input, '123'))

        expect(input.value).toBe('123')
    })

    it('should render with format', async () => {
        render(
            <MaskField hasFormat placeholder='Description' format='#####-##' />
        )

        const input = screen.getByPlaceholderText(
            'Description'
        ) as HTMLInputElement

        await act(async () => await userEvent.type(input, '1234567'))

        expect(input.value).toBe('12345-67')
    })

    it('should render with thousand and decimal separators', async () => {
        render(<MaskFieldWrapper />)

        const input = screen.getByPlaceholderText(
            'Description'
        ) as HTMLInputElement

        expect(input.value).toBe('1.234.567,89')

        await act(async () => await userEvent.clear(input))
        await act(async () => await userEvent.type(input, '9876543,21'))

        expect(input.value).toBe('9.876.543,21')
    })

    it('should match snapshot', () => {
        const { container } = render(<MaskField placeholder='Description' />)

        expect(container).toMatchSnapshot()
    })
})
