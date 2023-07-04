import React from 'react'
import FabV2 from './fab'
import FabWrapper from './fab-wrapper'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import { Meta, StoryFn } from '@storybook/react'

const Template: StoryFn<typeof FabV2> = args => <FabV2 {...args} />

export const Default = Template.bind({})
Default.args = {
    children: <FileCopyIcon />
}

export default {
    title: 'Experimental/Fab',
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