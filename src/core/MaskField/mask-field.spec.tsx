import * as React from 'react'
import { render, screen } from '@testing-library/react'
import MaskField from '.'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

describe('MaskField', () => {
    it('should render', async () => {
        render(<MaskField placeholder='Description' />)

        const input = screen.getByPlaceholderText(
            'Description'
        ) as HTMLInputElement

        await act(async () => await userEvent.type(input, '123'))

        expect(input.value).toBe('123')
    })
})
