import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import Panel from '.'

export default {
    title: 'Experimental/Panel',
    component: Panel,
    args: {
        expanded: true,
        title: 'Foo',
        details: <>Panel details</>
    }
} as Meta<typeof Panel>

const Template: StoryFn<typeof Panel> = args => <Panel {...args} />

export const Default = Template.bind({})

export const Nested = Template.bind({})
Nested.args = {
    nested: true
}

export const WithOmittedIcon = Template.bind({})
WithOmittedIcon.args = {
    hideExpansionIcon: true
}
