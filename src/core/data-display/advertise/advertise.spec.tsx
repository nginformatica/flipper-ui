import React from 'react'
import { render, screen } from '@testing-library/react'
import Advertise from '.'

describe('Advertise', () => {
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
        render(
            <Advertise
                comment='comment'
                author='author'
                authorStyle={{ padding: '10px' }}
            />
        )

        const author = screen.getByText('author')

        expect(author).toBeDefined()
        expect(author).toHaveProperty('style.padding', '10px')
    })

    it('should render with custom comment style', () => {
        render(
            <Advertise
                comment='comment'
                author='author'
                commentStyle={{ padding: '10px' }}
            />
        )

        const comment = screen.getByText('comment')

        expect(comment).toBeDefined()
        expect(comment).toHaveProperty('style.padding', '10px')
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Advertise comment='comment' author='author' />
        )

        expect(container).toMatchSnapshot()
    })
})
