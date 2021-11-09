import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Line from '../core/Line'

export default {
    title: 'Line',
    component: Line
} as ComponentMeta<typeof Line>

const Template: ComponentStory<typeof Line> = args => <Line { ...args } />

export const Default = Template.bind({})

export const Primary = Template.bind({})
Primary.args = {
    primary: true
}

export const LineWithWidthProp = Template.bind({})
LineWithWidthProp.args = {
    width: '100%'
}
