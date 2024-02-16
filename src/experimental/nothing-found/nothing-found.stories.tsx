import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import NothingFound from '.'

export default {
    title: 'Experimental/NothingFound',
    component: NothingFound,
    args: {
        show: true
    }
} as Meta<typeof NothingFound>

const Template: StoryFn<typeof NothingFound> = args => (
    <NothingFound {...args} />
)

export const Default = Template.bind({})

export const WithCustomTest = Template.bind({})
WithCustomTest.args = {
    customText: 'Custom text'
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
    readonly: true
}

export const WithButtonLabel = Template.bind({})
WithButtonLabel.args = {
    buttonLabel: 'Configurações'
}

export const WithSearchText = Template.bind({})
WithSearchText.args = {
    searchText: 'Fulano'
}
