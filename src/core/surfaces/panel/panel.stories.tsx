import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Actions from '@/core/data-display/actions'
import Panel from '.'

const meta: Meta<typeof Panel> = {
    title: 'Surfaces/Panel',
    component: Panel,
    argTypes: {
        defaultExpanded: {
            table: {
                disable: true
            }
        },
        hideSummary: {
            table: {
                disable: true
            }
        },
        elevation: {
            table: {
                disable: true
            }
        },
        area: {
            table: {
                disable: true
            }
        },
        summary: {
            table: {
                disable: true
            }
        },
        nested: {
            table: {
                disable: true
            }
        },
        id: {
            table: {
                disable: true
            }
        },
        className: {
            table: {
                disable: true
            }
        },
        onChange: {
            table: {
                disable: true
            }
        },
        details: {
            control: false,
            description: 'The panel content. Must be a React Component'
        },
        detailsStyle: {
            control: 'object',
            description: 'The panel content style'
        },
        actions: {
            control: false,
            description: 'The panel action buttons. Must be a React Component'
        },
        title: {
            control: 'text',
            description: 'The panel title'
        },
        expanded: {
            control: 'boolean',
            description: 'If `true`, the panel is expanded'
        },
        hideExpansionIcon: {
            control: 'boolean',
            description: 'If `true`, the icon is not shown'
        },
        style: {
            control: 'object',
            description: 'The panel style'
        }
    }
}

export default meta

type Story = StoryObj<typeof Panel>

export const panel: Story = {
    render: ({ ...args }) => {
        return <Panel {...args} />
    },
    args: {
        title: 'This is the card Title!',
        details: <div>This is the card content!</div>,
        detailsStyle: { color: 'gray' },
        expanded: true,
        hideExpansionIcon: false,
        actions: <Actions margin='12px' onConfirm={() => alert('Confirm')} />,
        style: { padding: '4px' }
    }
}
