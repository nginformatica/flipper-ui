import React from 'react'
import { render, screen } from '@testing-library/react'
import InputAdornment from '.'

describe('InputAdornment', () => {
    it('should render on start position', () => {
        render(
            <InputAdornment
                data-testid='input-adornment-container'
                position='start'>
                <>InputAdornment</>
            </InputAdornment>
        )

        const inputAdornment = screen.getByText('InputAdornment')
        const container = screen.getByTestId('input-adornment-container')

        expect(inputAdornment).toBeDefined()
        expect(container).toBeDefined()
        expect(inputAdornment.classList).toContain(
            'MuiInputAdornment-positionStart'
        )
    })

    it('should render on end position', () => {
        render(
            <InputAdornment
                data-testid='input-adornment-container'
                position='end'>
                <>InputAdornment</>
            </InputAdornment>
        )

        const inputAdornment = screen.getByText('InputAdornment')
        const container = screen.getByTestId('input-adornment-container')

        expect(inputAdornment).toBeDefined()
        expect(container).toBeDefined()
        expect(inputAdornment.classList).toContain(
            'MuiInputAdornment-positionEnd'
        )
    })

    it('should match snapshot', () => {
        const { container: start } = render(
            <InputAdornment position='start'>
                <>InputAdornment</>
            </InputAdornment>
        )

        const { container: end } = render(
            <InputAdornment position='end'>
                <>InputAdornment</>
            </InputAdornment>
        )

        expect(start).toMatchSnapshot()
        expect(end).toMatchSnapshot()
    })
})
