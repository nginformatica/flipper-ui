import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Collapse } from '.'

describe('Collapse', () => {
    it('should render opened', () => {
        render(
            <Collapse in data-testid='collapse-container'>
                I am open for discussions
            </Collapse>
        )

        const label = screen.getByText('I am open for discussions')
        const container = screen.getByTestId('collapse-container')

        expect(container.classList).toContain('MuiCollapse-entered')
        expect(label).toBeDefined()
    })

    it('should render closed', () => {
        render(
            <Collapse data-testid='collapse-container' in={false}>
                I am not open for discussions
            </Collapse>
        )

        const container = screen.getByTestId('collapse-container')

        expect(container.classList).toContain('MuiCollapse-hidden')
    })
})
