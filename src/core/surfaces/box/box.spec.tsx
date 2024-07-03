import React from 'react'
import { render, screen } from '@testing-library/react'
import Box from '.'

describe('Advertise', () => {
    it('should render', () => {
        render(
            <Box data-testid='box-container'>
                <div>Box</div>
            </Box>
        )

        const text = screen.getByText('Box')
        const container = screen.getByTestId('box-container')

        expect(text).toBeDefined()
        expect(container).toHaveProperty('style.padding', '18px')
        expect(container).toHaveProperty('style.minHeight', '400px')
    })

    it('should render with custom string margins', () => {
        render(
            <Box margin='10px' padding='12px' data-testid='box-container'>
                <div>Box</div>
            </Box>
        )

        const container = screen.getByTestId('box-container')

        expect(container).toHaveProperty('style.margin', '10px')
        expect(container).toHaveProperty('style.padding', '12px')
    })

    it('should render with custom number margins', () => {
        render(
            <Box margin={10} padding={12} data-testid='box-container'>
                <div>Box</div>
            </Box>
        )

        const container = screen.getByTestId('box-container')

        expect(container).toHaveProperty('style.margin', '10px')
        expect(container).toHaveProperty('style.padding', '12px')
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Box margin={10} padding={12} data-testid='box-container'>
                <div>Box</div>
            </Box>
        )

        expect(container).toMatchSnapshot()
    })
})
