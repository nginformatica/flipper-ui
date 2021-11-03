import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ExpansionPanel from '../core/ExpansionPanel'

export default {
    title: 'Testing/ExpansionPanel',
    component: ExpansionPanel
} as ComponentMeta<typeof ExpansionPanel>

const Template: ComponentStory<typeof ExpansionPanel> = args => (
    <ExpansionPanel { ...args } />
)
export const Default = Template.bind({})

Default.args = {
    summary: 'Pulp Fiction',
    datails: 'Detail'
}
