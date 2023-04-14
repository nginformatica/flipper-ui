import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Paper from '.'

describe('Paper', () => {
    it('should render children', async () => {
        const children = 'I am a Paper.'
        render(<Paper>{children}</Paper>)

        const matchingElements = screen.getByText(children)

        const container = screen.getByRole('mui-paper-container')

        expect(matchingElements).toBeDefined()
        expect(container.classList).toContain('MuiPaper-rounded')
    })

    it('should render square paper', async () => {
        const children = 'I am a Paper.'
        render(<Paper square>{children}</Paper>)

        const matchingElements = screen.getByText(children)

        expect(matchingElements).toBeDefined()
    })

    it('should render paper with no elevation', async () => {
        const children = 'I am a Paper.'
        render(<Paper elevation={0}>{children}</Paper>)

        const matchingElements = screen.getByText(children)
        const container = screen.getByRole('mui-paper-container')

        expect(matchingElements).toBeDefined()
        expect(container.classList).toContain('MuiPaper-elevation0')
    })

    it('should render paper with elevation', async () => {
        const children = 'I am a Paper.'
        render(<Paper elevation={12}>{children}</Paper>)

        const matchingElements = screen.getByText(children)
        const container = screen.getByRole('mui-paper-container')

        expect(matchingElements).toBeDefined()
        expect(container.classList).toContain('MuiPaper-elevation12')
    })

    it('should render paper with max elevation', async () => {
        const children = 'I am a Paper.'
        render(<Paper elevation={24}>{children}</Paper>)

        const matchingElements = screen.getByText(children)
        const container = screen.getByRole('mui-paper-container')

        expect(matchingElements).toBeDefined()
        expect(container.classList).toContain('MuiPaper-elevation24')
    })
})
