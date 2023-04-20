import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Chapter from '.'

export default {
    title: 'Chapter',
    component: Chapter,
    argTypes: {
        'data-testid': { table: { disable: true } }
    }
} as Meta<typeof Chapter>

const Template: StoryFn<typeof Chapter> = args => <Chapter {...args} />

export const Default = Template.bind({})
Default.args = {
    variant: 'body1',
    children: 'Chapter'
}

export const WithCustomStyle = Template.bind({})
WithCustomStyle.args = {
    style: { 'background-color': 'red' },
    variant: 'body1',
    typoStyle: { color: 'blue' },
    children: 'Chapter'
}
