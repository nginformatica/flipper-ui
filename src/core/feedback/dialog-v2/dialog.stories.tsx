/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Button from '@/core/inputs/button'
import { DialogV2, ConfirmDialog, RemoveDialog } from '.'

const meta: Meta<typeof DialogV2> = {
    title: 'Feedback/Dialog v2.0',
    component: DialogV2,
    argTypes: {
        title: {
            control: 'text',
            description: 'The dialog title.'
        },
        text: {
            control: 'text',
            description: 'The dialog text.'
        },
        content: {
            control: 'text',
            description:
                'The dialog content. Accepts strings and React Components. ' +
                'To render, use the `content` or the `text` prop.'
        },
        maxWidth: {
            options: ['xs', 'sm', 'md', 'lg'],
            control: { type: 'radio' },
            description: 'The dialog max width.'
        },
        fullWidth: {
            control: 'boolean',
            description: 'To set the full width on the dialog.'
        },
        primaryButtonText: {
            control: 'text',
            description: 'The primary button text.'
        },
        secondaryButtonText: {
            control: 'text',
            description:
                'The secondary button text. ' +
                'To render the secondary button you must have ' +
                'the `secondaryButtonText` and `secondaryButtonAction` props.'
        },
        primaryButtonColor: {
            options: ['inherit', 'primary', 'secondary', 'default'],
            control: { type: 'radio' },
            description: 'The primary button color.'
        },
        primaryButtonAction: {
            control: false,
            description: 'The primary button action function.'
        },
        secondaryButtonAction: {
            control: false,
            description: 'The secondary button action function.'
        }
    }
}

export default meta

type Story = StoryObj<typeof DialogV2>

export const dialog: Story = {
    render: ({ ...args }) => {
        const [open, setOpen] = useState(false)

        return (
            <>
                <Button onClick={() => setOpen(true)}>OPEN DIALOG</Button>
                <DialogV2
                    {...args}
                    open={open}
                    primaryButtonAction={() => setOpen(false)}
                    secondaryButtonAction={() => setOpen(false)}
                />
            </>
        )
    },
    args: {
        title: 'Dialog Title',
        text: 'A content here!',
        content: '',
        maxWidth: 'xs',
        fullWidth: true,
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Close',
        primaryButtonColor: 'inherit'
    }
}

export const removeDialog: Story = {
    render: ({ ...args }) => {
        const [open, setOpen] = useState(false)

        return (
            <>
                <Button onClick={() => setOpen(true)}>
                    OPEN REMOVE DIALOG
                </Button>
                <RemoveDialog
                    {...args}
                    open={open}
                    onCancel={() => setOpen(false)}
                    onConfirm={() => setOpen(false)}
                />
            </>
        )
    },
    args: {
        title: '',
        text: 'Are you sure you want to remove this?'
    }
}

export const confirmDialog: Story = {
    render: ({ ...args }) => {
        const [open, setOpen] = useState(false)

        return (
            <>
                <Button onClick={() => setOpen(true)}>
                    OPEN CONFIRM DIALOG
                </Button>
                <ConfirmDialog
                    {...args}
                    open={open}
                    onCancel={() => setOpen(false)}
                    onConfirm={() => setOpen(false)}
                />
            </>
        )
    },
    args: {
        title: 'Confirm',
        text: 'Are you sure you want to confirm this?'
    }
}
