import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Typography from '@/core/data-display/typography'
import Card from '.'
import { CardWrapper } from './styles'

const meta: Meta<typeof Card> = {
    title: 'Surfaces/Card',
    component: Card,
    argTypes: {
        action: {
            table: {
                disable: true
            }
        },
        id: {
            table: {
                disable: true
            }
        },
        name: {
            control: 'text',
            description: 'The card name'
        },
        title: {
            control: 'text',
            description: 'The card title'
        },
        label: {
            control: 'text',
            description:
                'The card Add Button label. Must be used with the `onClickAdd` prop'
        },
        editing: {
            control: 'boolean',
            description: 'If `true`, the title is editable'
        },
        nested: {
            control: 'boolean',
            description: 'To set the panel nested'
        },
        onClickAdd: {
            control: 'boolean',
            description: 'The function to implement on the Add Button'
        },
        onToggleEdit: {
            control: 'boolean',
            description: 'The functon to implement the `editing` toggle'
        },
        onRemove: {
            control: 'boolean',
            description:
                'The functon to implement to remove information.' +
                'Must be used with the `renderRemove` prop'
        },
        renderRemove: {
            control: 'boolean',
            description:
                'To render the remove button.' +
                'Must be used with the `onRemove` prop'
        }
    }
}

export default meta

type Story = StoryObj<typeof Card>

export const card: Story = {
    render: ({ ...args }) => {
        return (
            <CardWrapper>
                <Card {...args}>
                    <Typography margin='12px 0 0'>
                        This is the card content.
                    </Typography>
                </Card>
            </CardWrapper>
        )
    },
    args: {
        name: 'Card Name',
        title: 'This is the Card Title',
        label: "I'm the label!",
        nested: false,
        editing: false,
        renderRemove: false,
        onClickAdd: () => alert('Add Me!'),
        onToggleEdit: () => alert('Edit Me!'),
        onRemove: () => alert('Remove Me!')
    }
}
