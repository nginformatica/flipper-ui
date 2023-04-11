import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Box from '.'
import Typography from '../Typography'

describe('Advertise', () => {
    it('should render', () => {
        render(
            <Box data-testid='box-container'>
                <Typography>Box</Typography>
            </Box>
        )

        const text = screen.getByText('Box')
        const container = screen.getByTestId('box-container')

        expect(text).toBeDefined()
        expect(container).toHaveProperty('style.padding', '18px')
        expect(container).toHaveProperty('style.minHeight', '400px')
    })

    it('should render with custom string margins', () => {
        const newMargin = '10px'
        const newPadding = '12px'

        render(
            <Box
                margin={newMargin}
                padding={newPadding}
                data-testid='box-container'>
                <Typography>Box</Typography>
            </Box>
        )

        const container = screen.getByTestId('box-container')

        expect(container).toHaveProperty('style.margin', newMargin)
        expect(container).toHaveProperty('style.padding', newPadding)
    })

    it('should render with custom number margins', () => {
        const newMargin = 10
        const newPadding = 12

        render(
            <Box
                margin={newMargin}
                padding={newPadding}
                data-testid='box-container'>
                <Typography>Box</Typography>
            </Box>
        )

        const container = screen.getByTestId('box-container')

        expect(container).toHaveProperty('style.margin', `${newMargin}px`)
        expect(container).toHaveProperty('style.padding', `${newPadding}px`)
    })
})
