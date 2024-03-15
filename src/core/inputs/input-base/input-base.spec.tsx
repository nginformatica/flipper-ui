import React from 'react'
import { render, screen } from '@testing-library/react'
import InputBase from '.'

describe('InputBase', () => {
    it('should render', () => {
        render(
            <InputBase
                inputProps={{
                    'data-testid': 'input-base'
                }}
                data-testid='input-base-container'
            />
        )

        const inputBase = screen.getByTestId('input-base')
        const container = screen.getByTestId('input-base-container')

        expect(inputBase).toBeDefined()
        expect(container).toBeDefined()
    })

    it('should render with custom style', () => {
        render(
            <InputBase
                inputProps={{
                    'data-testid': 'input-base'
                }}
                data-testid='input-base-container'
                padding={5}
                margin={10}
                style={{ backgroundColor: 'blue' }}
            />
        )

        const container = screen.getByTestId('input-base-container')

        expect(container).toHaveProperty('style.backgroundColor', 'blue')
        expect(container).toHaveProperty('style.margin', '10px')
        expect(container).toHaveProperty('style.padding', '5px')
    })

    it('should match snapshot', () => {
        const { container } = render(<InputBase />)

        expect(container).toMatchSnapshot()
    })
})
