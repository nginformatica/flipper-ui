import React from 'react'
import { render, screen } from '@testing-library/react'
import Paper from '.'

describe('Paper', () => {
    it('should render children', () => {
        const children = 'I am a Paper.'

        render(<Paper>{children}</Paper>)

        const matchingElements = screen.getByText(children)

        expect(matchingElements).toBeDefined()
    })

    it('should render round paper', () => {
        const children = 'I am a Paper.'

        render(<Paper data-testid='mui-paper-container'>{children}</Paper>)

        const container = screen.getByTestId('mui-paper-container')

        expect(container.classList).toContain('MuiPaper-rounded')
    })

    it('should render square paper', () => {
        const children = 'I am a Paper.'

        render(
            <Paper square data-testid='mui-paper-container'>
                {children}
            </Paper>
        )

        const container = screen.getByTestId('mui-paper-container')

        expect(container.classList).not.toContain('MuiPaper-rounded')
    })

    it('should render paper with no elevation', () => {
        const children = 'I am a Paper.'

        render(
            <Paper elevation={0} data-testid='mui-paper-container'>
                {children}
            </Paper>
        )

        const matchingElements = screen.getByText(children)
        const container = screen.getByTestId('mui-paper-container')

        expect(matchingElements).toBeDefined()
        expect(container.classList).toContain('MuiPaper-elevation0')
    })

    it('should render paper with elevation', () => {
        const children = 'I am a Paper.'

        render(
            <Paper elevation={12} data-testid='mui-paper-container'>
                {children}
            </Paper>
        )

        const matchingElements = screen.getByText(children)
        const container = screen.getByTestId('mui-paper-container')

        expect(matchingElements).toBeDefined()
        expect(container.classList).toContain('MuiPaper-elevation12')
    })

    it('should render paper with max elevation', () => {
        const children = 'I am a Paper.'

        render(
            <Paper elevation={24} data-testid='mui-paper-container'>
                {children}
            </Paper>
        )

        const matchingElements = screen.getByText(children)
        const container = screen.getByTestId('mui-paper-container')

        expect(matchingElements).toBeDefined()
        expect(container.classList).toContain('MuiPaper-elevation24')
    })

    it('should match snapshot', () => {
        const { container } = render(<Paper>'I am a Paper.'</Paper>)

        expect(container).toMatchSnapshot()
    })
})
