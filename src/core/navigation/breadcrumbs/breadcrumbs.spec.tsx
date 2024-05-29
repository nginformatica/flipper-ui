import React from 'react'
import { render, screen } from '@testing-library/react'
import Breadcrumbs from '.'

describe('Breadcrumbs', () => {
    const defaultLinkWrapper = (link: string, label: string) => (
        <a key={link} href={link}>
            {label}
        </a>
    )

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
                linkWrapper={defaultLinkWrapper}
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

    it('should match snapshot', () => {
        const { container } = render(
            <Breadcrumbs
                pathname={'/foo/bar'}
                homeId='-'
                pathMapping={{
                    '-': 'Home',
                    foo: 'Foo',
                    bar: 'Bar'
                }}
                linkWrapper={defaultLinkWrapper}
            />
        )

        expect(container).toMatchSnapshot()
    })
})
