import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { IconFileCopy } from '@/icons/mui-icons'
import FabV2 from '.'
import { theme } from '@/theme'

const { primary } = theme.colors

const meta: Meta<typeof FabV2> = {
    title: 'DataDisplay/Fab v2.0',
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
            description: 'The fab name'
        },
        tooltip: {
            control: 'text',
            description: 'The fab tooltip label'
        },
        mini: {
            control: 'boolean',
            description: 'The fab size'
        },
        padding: {
            control: 'text',
            description: 'The fab padding'
        },
        margin: {
            control: 'text',
            description: 'The fab margin'
        },
        style: {
            control: 'object',
            description: 'The fab style'
        }
    }
}

export default meta

type Story = StoryObj<typeof FabV2>

export const fabV2: Story = {
    render: ({ ...args }) => {
        return (
            <FabV2 {...args} onClick={() => alert('Fab clicked!')}>
                <IconFileCopy />
            </FabV2>
        )
    },
    args: {
        name: 'Copy',
        mini: true,
        tooltip: 'Copy file',
        margin: '0px',
        padding: '0px',
        style: { color: primary.main }
    }
}
