import React from 'react'
import { FileCopy } from '@mui/icons-material'
import type { Meta, StoryObj } from '@storybook/react'
import FabV2 from '.'
import { theme } from '@/theme'

const { primary } = theme.colors

const meta: Meta<typeof FabV2> = {
    title: 'DataDisplay/FabV2 v2.0',
    component: FabV2,
    argTypes: {
        className: {
            table: {
                disable: true
            }
        },
        onClick: {
            table: {
                disable: true
            }
        },
        name: {
            control: 'text',
            description: 'The Fab name.'
        },
        tooltip: {
            control: 'text',
            description: 'The Fab tooltip label.'
        },
        mini: {
            control: 'boolean',
            description: 'The Fab size.'
        },
        padding: {
            control: 'text',
            description: 'The Fab padding.'
        },
        margin: {
            control: 'text',
            description: 'The Fab margin.'
        },
        style: {
            control: 'object',
            description: 'The Fab style.'
        }
    }
}

export default meta

type Story = StoryObj<typeof FabV2>

export const fabV2: Story = {
    render: ({ ...args }) => {
        return (
            <FabV2 {...args} onClick={() => alert('Fab clicked!')}>
                <FileCopy />
            </FabV2>
        )
    },
    args: {
        name: 'Copy',
        mini: true,
        tooltip: 'Copy file',
        margin: '',
        padding: '',
        style: { color: primary.main }
    }
}
