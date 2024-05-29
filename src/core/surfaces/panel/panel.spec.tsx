import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Panel from '.'

describe('Panel', () => {
    it('should render', () => {
        render(<Panel title='Foo' details={<button>bar</button>} />)

        const panel = screen.getByText('Foo')
        const expandIcon = screen.getByTestId('expand-icon')

        expect(panel).toBeDefined()
        expect(expandIcon).toBeDefined()
    })

    it('should render with default style', () => {
        render(<Panel title='Foo' details={<button>bar</button>} />)

        const panelContainer = screen.getByTestId('panel-component')

        expect(panelContainer).toHaveProperty('style.border', '')
    })

    it('should render nested', () => {
        render(<Panel nested title='Foo' details={<button>bar</button>} />)

        const panel = screen.getByTestId('panel-component')

        expect(panel).toHaveProperty('style.border', '1px solid lightgrey')
    })

    it('should render with omitted icon', () => {
        render(
            <Panel
                hideExpansionIcon
                title='Foo'
                details={<button>bar</button>}
            />
        )

        waitFor(() => {
            const panel = screen.getByTestId('expand-icon')

            expect(panel).not.toBeDefined()
        })
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Panel title='Foo' details={<button>bar</button>} />
        )

        expect(container).toMatchSnapshot()
    })
})
