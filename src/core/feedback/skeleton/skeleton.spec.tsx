import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Skeleton from '.'

describe('Skeleton', () => {
    it('should render', () => {
        render(<Skeleton />)

        const loading = screen.getByTestId('skeleton-container')

        expect(loading).toBeDefined()
    })

    it('should render with custom width and height', () => {
        const { container } = render(<Skeleton width={64} height={64} />)

        const loading = container.querySelector('react-loading-skeleton')

        waitFor(() => {
            expect(loading).toHaveProperty('style.width', '64px')
            expect(loading).toHaveProperty('style.height', '64px')
        })
    })

    it('should render a circle', () => {
        const { container } = render(<Skeleton circle width={64} height={64} />)

        const loading = container.querySelector('react-loading-skeleton')

        waitFor(() => {
            expect(loading).toHaveProperty('border-radius', '50%')
        })
    })

    it('should match snapshot', () => {
        const container = render(<Skeleton />)

        expect(container).toMatchSnapshot()
    })

    it('should match snapshot - with custom height', () => {
        const container = render(<Skeleton width={64} height={64} />)

        expect(container).toMatchSnapshot()
    })

    it('should match snapshot - circle', () => {
        const container = render(<Skeleton circle width={64} height={64} />)

        expect(container).toMatchSnapshot()
    })
})
