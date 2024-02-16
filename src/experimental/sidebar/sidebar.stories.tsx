import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import { Home, Computer, Edit } from '@/icons'
import Sidebar from '.'

export default {
    title: 'Experimental/Sidebar',
    component: Sidebar
} as Meta<typeof Sidebar>

const Template: StoryFn<typeof Sidebar> = args => <Sidebar {...args} />

export const Default = Template.bind({})
Default.args = {
    options: [
        {
            icon: <Home />,
            name: 'Home',
            label: 'Home',
            route: '/'
        },
        {
            icon: <Computer />,
            name: 'Computer',
            label: 'Computer',
            route: '/computer'
        }
    ],
    extraOptions: [
        {
            icon: <Edit />,
            name: 'Edit',
            label: 'edit',
            route: '/edit'
        }
    ],
    handleGoTo: (foo: string, bar: string) => () => {
        alert(foo + ' ' + bar)
    }
}

export const Loading = Template.bind({})
Loading.args = {
    loading: true,
    options: []
}
