import React from 'react'
import { render, screen } from '@testing-library/react'
import Chapter from '.'

describe('Chapter', () => {
    it('should render', () => {
        render(<Chapter>Chapter</Chapter>)

        const chapter = screen.getByText('Chapter')

        expect(chapter).toBeDefined()
    })

    it('should render primary color', () => {
        render(
            <Chapter primary data-testid='chapter-container'>
                Chapter
            </Chapter>
        )
        const chapter = screen.getByTestId('chapter-container')

        expect(chapter).toBeDefined()
    })

    it('should match snapshot', () => {
        const { container } = render(<Chapter>Chapter</Chapter>)

        expect(container).toMatchSnapshot()
    })
})
