import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import BreadcrumbsComponent from '.'

export default {
    title: 'Experimental/Breadcrumbs',
    component: BreadcrumbsComponent
} as Meta<typeof BreadcrumbsComponent>

const Template: StoryFn<typeof BreadcrumbsComponent> = args => {
    return <BreadcrumbsComponent {...args} />
}

export const Default = Template.bind({})
Default.args = {
    pathname: '/foo/bar',
    homeId: '-',
    pathMapping: {
        '-': 'Home',
        foo: 'Foo',
        bar: 'Bar'
    }
}
