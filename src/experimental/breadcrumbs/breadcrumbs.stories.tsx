import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import Breadcrumbs from '.'

export default {
    title: 'Experimental/Breadcrumbs',
    component: Breadcrumbs
} as Meta<typeof Breadcrumbs>

const Template: StoryFn<typeof Breadcrumbs> = args => {
    return <Breadcrumbs {...args} />
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
