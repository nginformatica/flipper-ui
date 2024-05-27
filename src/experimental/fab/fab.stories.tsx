import React from 'react'
import { FileCopy } from '@mui/icons-material'
import type { Meta, StoryFn } from '@storybook/react'
import FabV2 from '.'

const Template: StoryFn<typeof FabV2> = args => <FabV2 {...args} />

export const Default = Template.bind({})
Default.args = {
    children: <FileCopy />
}

export default {
    title: 'Experimental/Fab',
    component: FabV2,
    args: {
        name: 'copy',
        tooltip: 'Copy file',
        onClick: () => alert('fab click')
    }
} as Meta<typeof FabV2>
