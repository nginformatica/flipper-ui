import React from 'react'
import Card from '.'
import { Typography } from '@/index'
import { Meta, StoryFn } from '@storybook/react'

export default {
    title: 'experimental/Card',
    component: Card,
    args: {
        name: 'Card',
        title: 'Foo Bar',
        onAddProps: undefined,
        onClickAdd: undefined,
        onEditProps: undefined,
        onToggleEdit: undefined
    }
} as Meta<typeof Card>

const Template: StoryFn<typeof Card> = args => {
    return <Card {...args} />
}

export const Default = Template.bind({})
Default.args = {
    children: 'Dummy content'
}

export const WithOnToggleEdit = Template.bind({})
WithOnToggleEdit.args = {
    onToggleEdit: () => alert('onToggleEdit'),
    children: <Typography>Dummy content</Typography>
}

export const Editing = Template.bind({})
Editing.args = {
    editing: true,
    onToggleEdit: () => alert('onToggleEdit'),
    children: <Typography>Dummy content</Typography>
}
