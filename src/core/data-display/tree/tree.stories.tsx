import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import { Tree } from '.'

export default {
    title: 'DataDisplay/Tree',
    component: Tree
} as Meta<typeof Tree>

const Template: StoryFn<typeof Tree> = args => <Tree {...args} />

export const Default = Template.bind({})
Default.args = {
    nodes: [
        {
            id: 0,
            name: 'Tree',
            nodes: [
                {
                    id: 1,
                    name: 'Branch'
                },
                {
                    id: 2,
                    name: 'Branch'
                },
                {
                    id: 3,
                    name: 'Branch',
                    nodes: [
                        {
                            id: 5,
                            name: 'Leaf'
                        }
                    ]
                }
            ]
        }
    ]
}
