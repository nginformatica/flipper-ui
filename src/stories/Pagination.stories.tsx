import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Pagination from '../core/Pagination'

export default {
    title: 'Pagination',
    component: Pagination
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = args => (
    <Pagination {...args} />
)

export const Default = Template.bind({})
Default.args = {
    pages: 5,
    active: 3,
    onNext: () => alert('Next page'),
    onPrevious: () => alert('Previous page'),
    onNavigate: page => alert('You tried to navigate to page ' + page),
    children: 'Pagination'
}
