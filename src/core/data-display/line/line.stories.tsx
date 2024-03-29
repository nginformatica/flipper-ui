import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import { Line } from '.'

export default {
    title: 'DataDisplay/Line',
    component: Line,
    argTypes: {
        'data-testid': {
            table: {
                disable: true
            }
        }
    }
} as Meta<typeof Line>

const Template: StoryFn<typeof Line> = args => <Line {...args} />

export const Default = Template.bind({})

export const Primary = Template.bind({})
Primary.args = {
    primary: true
}

export const LineWithWidthProp = Template.bind({})
LineWithWidthProp.args = {
    width: '100%'
}
