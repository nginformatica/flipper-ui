import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import Typography from '@/core/data-display/typography'
import Card from '.'

export default {
    title: 'Experimental/Card',
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

export const WithOnClickAdd = Template.bind({})
WithOnClickAdd.args = {
    readonly: false,
    onAddBtnLabel: 'Add',
    onClickAdd: () => alert('onToggleEdit'),
    children: <Typography>Dummy content</Typography>
}
