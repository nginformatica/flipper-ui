import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Advertise from '.'

describe('Advertise', () => {
    const newPadding = '10px 10px'
    const CUSTOM = { padding: newPadding }

    it('should render', () => {
        render(<Advertise comment='comment' author='author' />)

        const author = screen.getByText('author')
        const comment = screen.getByText('comment')

        expect(author).toBeDefined()
        expect(author).toHaveProperty('style.padding', '6px 18px')
        expect(comment).toBeDefined()
        expect(comment).toHaveProperty('style.padding', '6px 18px')
    })

    it('should render with custom author style', () => {
        const newPadding = '10px 10px'

        render(
            <Advertise comment='comment' author='author' authorStyle={CUSTOM} />
        )

        const author = screen.getByText('author')

        expect(author).toBeDefined()
        expect(author).toHaveProperty('style.padding', newPadding)
    })

    it('should render with custom comment style', () => {
        const newPadding = '10px 10px'

        render(
            <Advertise
                comment='comment'
                author='author'
                commentStyle={CUSTOM}
            />
        )

        const comment = screen.getByText('comment')

        expect(comment).toBeDefined()
        expect(comment).toHaveProperty('style.padding', newPadding)
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Advertise comment='comment' author='author' />
        )

        expect(container).toMatchSnapshot()
    })
})
