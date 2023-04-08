import React from 'react'
import BreadcrumbsComponent from '.'

export const Breadcrumbs = () => {
    return (
        <BreadcrumbsComponent
            pathname={'/foo/bar'}
            homeId='-'
            pathMapping={{
                '-': 'Home',
                foo: 'Foo',
                bar: 'Bar'
            }}
        />
    )
}

export default {
    title: 'experimental/Breadcrumbs',
    component: BreadcrumbsComponent
}
