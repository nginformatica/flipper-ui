import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import { Node } from '.'

export default {
    title: 'DataDisplay/Node',
    component: Node
} as Meta<typeof Node>

const Template: StoryFn<typeof Node> = args => <Node {...args} />

export const Default = Template.bind({})
Default.args = {
    id: '1',
    name: 'Branch',
    children: (
        <>
            <Node id='2' name='I am a Node 1' />
            <Node id='3' name='I am a Node 2' />
            <Node id='4' name='I am a Node 3' />
        </>
    )
}
