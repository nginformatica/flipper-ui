import * as React from 'react'
import { render, screen } from '@testing-library/react'
import ThemeProvider from '.'

describe('ThemeProvider', () => {
    it('should render children', () => {
        render(
            <ThemeProvider>
                <span>Test</span>
            </ThemeProvider>
        )
        const child = screen.getByText('Test')
        expect(child).toBeDefined()
    })
})
