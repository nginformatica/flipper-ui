import React from 'react'
import FabV2 from './Fab'
import FabWrapper from './FabWrapper'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import { Meta, StoryFn } from '@storybook/react'

const Template: StoryFn<typeof FabV2> = args => <FabV2 {...args} />

export const Default = Template.bind({})
Default.args = {
    children: <FileCopyIcon />
}

export default {
    title: 'experimental/Fab',
    component: FabV2,
    args: {
        name: 'copy',
        tooltip: 'Copy file',
        onClick: () => alert('fab click')
    },
    subcomponents: {
        FabWrapper
    }
} as Meta<typeof FabV2>
