import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Content } from '.'

describe('Content', () => {
    it('should render', () => {
        render(<Content data-testid='container'>I am a Content</Content>)

        const container = screen.getByTestId('container')
        const label = screen.getByText('I am a Content')

        expect(container).toBeDefined()
        expect(label).toBeDefined()
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Content data-testid='container'>I am a Content</Content>
        )

        expect(container).toMatchSnapshot()
    })
})
