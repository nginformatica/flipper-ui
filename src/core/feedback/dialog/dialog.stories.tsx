import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Button from '@/core/inputs/button'
import Dialog from '.'

const meta: Meta<typeof Dialog> = {
    title: 'Feedback/Dialog',
    component: Dialog,
    argTypes: {
        title: {
            control: 'text',
            description:
                'The dialog title. It can be a string or a React Component'
        },
        text: {
            control: 'text',
            description: 'The dialog text'
        },
        content: {
            control: 'text',
            description:
                'The dialog content. Accepts strings and React Components. ' +
                'To render, use the `content` or the `text` prop'
        },
        maxWidth: {
            options: ['xs', 'sm', 'md', 'lg'],
            control: { type: 'radio' },
            description: 'The dialog max width'
        },
        fullWidth: {
            control: 'boolean',
            description: 'To set the full width on the dialog'
        }
    }
}

export default meta

type Story = StoryObj<typeof Dialog>

export const dialog: Story = {
    render: ({ ...args }) => {
        const [open, setOpen] = useState(false)

        return (
            <>
                <Button onClick={() => setOpen(true)}>OPEN DIALOG</Button>
                <Dialog
                    {...args}
                    open={open}
                    actions={
                        <Button
                            margin='12px'
                            variant='contained'
                            onClick={() => setOpen(false)}>
                            Close
                        </Button>
                    }
                    onClose={() => setOpen(false)}
                />
            </>
        )
    },
    args: {
        title: 'Dialog Title',
        text: 'A text here!',
        content: '',
        snippet: 'here"s the snippet!',
        maxWidth: 'xs',
        fullWidth: true
    }
}
