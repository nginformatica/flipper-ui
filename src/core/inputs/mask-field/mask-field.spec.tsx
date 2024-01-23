import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { MaskField } from '.'

describe('MaskField', () => {
    it('should render with default TextField without customInput', async () => {
        render(<MaskField placeholder='Description' />)

        const input = screen.getByPlaceholderText(
            'Description'
        ) as HTMLInputElement

        await act(async () => await userEvent.type(input, '123'))

        expect(input.value).toBe('123')
    })

    // it('should render with format as string', async () => {
    //     render(<MaskField placeholder='Description' format='####' />)

    //     const input = screen.getByPlaceholderText(
    //         'Description'
    //     ) as HTMLInputElement

    //     await act(async () => await userEvent.type(input, '789'))

    //     expect(input.value).toBe('789')
    // })

    // it('should render with format as a function', async () => {
    //     const formatFunction = 'jest.fn(value => value)'
    //     render(<MaskField placeholder='Description' format={formatFunction} />)

    //     const input = screen.getByPlaceholderText(
    //         'Description'
    //     ) as HTMLInputElement

    //     await act(async () => await userEvent.type(input, '1'))

    //     expect(input.value).toBe('1')
    //     expect(formatFunction)
    // })
})
