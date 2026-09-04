import React from 'react'
import { render, screen } from '@testing-library/react'
import { fontFamily } from '@/theme/typography'
import Typography from '.'
import { muiThemeOptions, theme, ThemeProviderFlipper } from '@/theme'

const { fontSize } = theme

const renderThemed = (children: React.ReactNode) =>
    render(
        <ThemeProviderFlipper options={muiThemeOptions}>
            {children}
        </ThemeProviderFlipper>
    )

describe('Typography', () => {
    it('should render', () => {
        render(<Typography>Some text</Typography>)

        const typography = screen.getByText('Some text')

        expect(typography).toBeDefined()
        expect(typography.classList).toContain('MuiTypography-body2')
    })

    it('should render without variant', () => {
        render(<Typography>Some text</Typography>)

        const typography = screen.getByText('Some text')

        expect(typography.classList).toContain('MuiTypography-body2')
    })

    it('should render with variant', () => {
        render(<Typography variant='h1'>Title</Typography>)

        const typography = screen.getByText('Title')

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

    it.each([
        ['micro', fontSize.micro],
        ['footnote', fontSize.footnote],
        ['dense', fontSize.dense],
        ['display', fontSize.display]
    ] as const)(
        'should render the %s size token from the theme',
        (variant, size) => {
            renderThemed(<Typography variant={variant}>Some text</Typography>)

            const typography = screen.getByText('Some text')

            expect(typography.classList).toContain(`MuiTypography-${variant}`)
            expect(getComputedStyle(typography).fontSize).toBe(size)
            expect(getComputedStyle(typography).fontFamily).toBe(fontFamily)
        }
    )

    it('should render the size tokens without explicit theme options', () => {
        render(
            <ThemeProviderFlipper>
                <Typography variant='micro'>Some text</Typography>
            </ThemeProviderFlipper>
        )

        const typography = screen.getByText('Some text')

        expect(getComputedStyle(typography).fontSize).toBe(fontSize.micro)
    })

    it('should render the display token as a block element', () => {
        renderThemed(<Typography variant='display'>1234</Typography>)

        expect(screen.getByText('1234').tagName).toBe('P')
    })

    it('should render the small size tokens as inline elements', () => {
        renderThemed(<Typography variant='footnote'>Some text</Typography>)

        expect(screen.getByText('Some text').tagName).toBe('SPAN')
    })

    it.each([
        ['micro', fontSize.micro],
        ['footnote', fontSize.footnote],
        ['dense', fontSize.dense],
        ['display', fontSize.display]
    ] as const)(
        'should fall back to the %s size token without a theme',
        (variant, size) => {
            render(<Typography variant={variant}>Some text</Typography>)

            const typography = screen.getByText('Some text')

            expect(getComputedStyle(typography).fontSize).toBe(size)
            expect(getComputedStyle(typography).fontFamily).toBe(fontFamily)
        }
    )

    it('should fall back to the size tokens under a theme without them', () => {
        render(
            <ThemeProviderFlipper options={{ palette: { mode: 'light' } }}>
                <Typography variant='dense'>Some text</Typography>
            </ThemeProviderFlipper>
        )

        const typography = screen.getByText('Some text')

        expect(getComputedStyle(typography).fontSize).toBe(fontSize.dense)
    })

    it('should map the display token to a block element on the fallback', () => {
        render(<Typography variant='display'>1234</Typography>)

        expect(screen.getByText('1234').tagName).toBe('P')
    })

    it('should let sx override the fallback size token', () => {
        render(
            <Typography variant='micro' sx={{ fontSize: '2rem' }}>
                Some text
            </Typography>
        )

        const typography = screen.getByText('Some text')

        expect(getComputedStyle(typography).fontSize).toBe('2rem')
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Typography margin={10} padding={5} style={{ color: 'red' }}>
                Some text
            </Typography>
        )

        expect(container).toMatchSnapshot()
    })
})
