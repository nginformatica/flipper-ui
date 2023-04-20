import React from 'react'
import BreadcrumbsComponent from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
    title: 'experimental/Breadcrumbs',
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
