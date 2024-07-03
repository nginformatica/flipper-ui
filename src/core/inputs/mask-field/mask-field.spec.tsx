import React, { act } from 'react'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
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

    it('should match snapshot', () => {
        const { container } = render(<MaskField placeholder='Description' />)

        expect(container).toMatchSnapshot()
    })
})
