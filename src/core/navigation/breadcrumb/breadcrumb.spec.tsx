import React from 'react'
import { render, screen } from '@testing-library/react'
import Link from '@/core/navigation/link'
import Breadcrumb from '.'

describe('Drawer', () => {
    it('should render', () => {
        render(<Breadcrumb data-testid='breadcrumb' />)

        const breadcrumb = screen.getByTestId('breadcrumb')

        expect(breadcrumb).toBeDefined()
    })

    it('should render children', () => {
        render(
            <Breadcrumb data-testid='breadcrumb'>
                <Link color='inherit' href='#'>
                    Flipper-ui
                </Link>
                <Link color='inherit' href='#'>
                    Breadcrumb
                </Link>
            </Breadcrumb>
        )

        const firstChildren = screen.getByText('Flipper-ui')
        const secondChildren = screen.getByText('Breadcrumb')

        expect(firstChildren).toBeDefined()
        expect(secondChildren).toBeDefined()
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Breadcrumb>
                <Link color='inherit' href='#'>
                    Flipper-ui
                </Link>
                <Link color='inherit' href='#'>
                    Breadcrumb
                </Link>
            </Breadcrumb>
        )

        expect(container).toMatchSnapshot()
    })
})
