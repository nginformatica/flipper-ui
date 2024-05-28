import React from 'react'
import { FileCopy } from '@mui/icons-material'
import type { Meta, StoryObj } from '@storybook/react'
import Fab from '.'
import { theme } from '@/theme'

const { primary } = theme.colors

const meta: Meta<typeof Fab> = {
    title: 'Experimental/Fab',
    component: Fab,
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
        large: {
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

type Story = StoryObj<typeof Fab>

export const fab: Story = {
    render: ({ ...args }) => {
        return (
            <Fab {...args} onClick={() => alert('Fab clicked!')}>
                <FileCopy />
            </Fab>
        )
    },
    args: {
        name: 'Copy',
        large: true,
        tooltip: 'Copy file',
        margin: '',
        padding: '',
        style: { color: primary.main }
    }
}
