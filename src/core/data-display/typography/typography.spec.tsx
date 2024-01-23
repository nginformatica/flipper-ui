import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Typography } from '.'

describe('Typography', () => {
    it('should render with no variant', () => {
        render(<Typography>Some text</Typography>)

        const typography = screen.getByText('Some text')

        expect(typography).toBeDefined()
        expect(typography.classList).toContain('MuiTypography-body2')
    })

    it('should render with variant', () => {
        render(<Typography variant='h1'>Title</Typography>)

        const typography = screen.getByText('Title')

        expect(typography).toBeDefined()
        expect(typography.classList).toContain('MuiTypography-h1')
    })

    it('should render with custom style', () => {
        render(
            <Typography margin={10} padding={5} style={{ color: 'red' }}>
                Some text
            </Typography>
        )

        const typography = screen.getByText('Some text')

        expect(typography.style.color).toBe('red')
        expect(typography.style.margin).toBe('10px')
        expect(typography.style.padding).toBe('5px')
    })
})
