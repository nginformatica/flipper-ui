import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Panel from '.'

describe('Panel', () => {
    const TITLE = 'Foo'
    const DETAILS = <button>bar</button>
    it('should render', () => {
        render(<Panel title={TITLE} details={DETAILS} />)

        const panel = screen.getByText(TITLE)
        const panelContainer = screen.getByTestId('panel-component')
        const expandIcon = screen.getByTestId('expand-icon')

        expect(panel).toBeDefined()
        expect(panelContainer).toHaveProperty('style.border', '')
        expect(expandIcon).toBeDefined()
    })

    it('should render nested', () => {
        render(<Panel nested title={TITLE} details={DETAILS} />)

        const panel = screen.getByTestId('panel-component')

        expect(panel).toHaveProperty('style.border', '1px solid lightgrey')
    })

    it('should render with omitted icon', () => {
        render(<Panel hideExpansionIcon title={TITLE} details={DETAILS} />)

        waitFor(() => {
            const panel = screen.getByTestId('expand-icon')

            expect(panel).not.toBeDefined()
        })
    })
})
