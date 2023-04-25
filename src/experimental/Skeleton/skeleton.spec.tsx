import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Skeleton from '.'

const Simple = () => <Skeleton />
const WithCustomHeight = () => <Skeleton width={64} height={64} />
const Circle = () => <Skeleton circle width={64} height={64} />

describe('Skeleton', () => {
    it('should render component', () => {
        render(<Simple />)

        const loading = screen.getByTestId('skeleton-container')

        expect(loading).toBeDefined()
    })

    it('should match snapshot - Simple', () => {
        const container = render(<Simple />)

        expect(container).toMatchSnapshot()
    })

    it('should match snapshot - WithCustomHeight', () => {
        const container = render(<WithCustomHeight />)

        expect(container).toMatchSnapshot()
    })

    it('should match snapshot - Circle', () => {
        const container = render(<Circle />)

        expect(container).toMatchSnapshot()
    })
})
