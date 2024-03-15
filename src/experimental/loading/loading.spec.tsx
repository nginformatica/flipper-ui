import React from 'react'
import { render, screen } from '@testing-library/react'
import { Loading } from '.'

describe('Loading', () => {
    it('should render', () => {
        render(<Loading />)

        const loading = screen.getByTestId('loading-component')

        expect(loading).toBeDefined()
    })

    it('should render with custom size', () => {
        render(<Loading size={32} />)

        const progressBar = screen.getByRole('progressbar')

        expect(progressBar).toHaveProperty('style.width', '32px')
        expect(progressBar).toHaveProperty('style.height', '32px')
    })

    it('should render with custom margin', () => {
        render(<Loading margin={32} />)

        const loading = screen.getByTestId('loading-component')

        expect(loading).toHaveProperty('style.margin', '32px')
    })

    it('should match snapshot', () => {
        const { container } = render(<Loading />)

        expect(container).toMatchSnapshot()
    })
})
