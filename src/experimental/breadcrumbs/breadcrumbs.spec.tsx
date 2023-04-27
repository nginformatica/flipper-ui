import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Breadcrumbs from '.'

describe('Breadcrumbs', () => {
    it('should render', () => {
        render(
            <Breadcrumbs
                pathname={'/foo/bar'}
                homeId='-'
                pathMapping={{
                    '-': 'Home',
                    foo: 'Foo',
                    bar: 'Bar'
                }}
            />
        )

        const breadcrumbs = screen.getByText('Home')
        expect(breadcrumbs).toBeDefined()
    })

    it('should render without pathname', () => {
        render(
            <Breadcrumbs
                homeId='-'
                pathMapping={{
                    '-': 'Home',
                    foo: 'Foo',
                    bar: 'Bar'
                }}
            />
        )

        const breadcrumbs = screen.getByText('Home')
        expect(breadcrumbs).toBeDefined()
    })
})
