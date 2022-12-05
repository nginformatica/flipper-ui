import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Node from '../core/Node'

export default {
    title: 'Node',
    component: Node
} as ComponentMeta<typeof Node>

const Template: ComponentStory<typeof Node> = args => <Node {...args} />

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
