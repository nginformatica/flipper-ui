import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Pagination from '.'

export default {
    title: 'Pagination',
    component: Pagination
} as Meta<typeof Pagination>

const Template: StoryFn<typeof Pagination> = args => <Pagination {...args} />

export const Default = Template.bind({})
Default.args = {
    pages: 5,
    active: 3,
    onNext: () => alert('Next page'),
    onPrevious: () => alert('Previous page'),
    onNavigate: (page: number) =>
        alert('You tried to navigate to page ' + page),
    children: 'Pagination'
}
