import React, { useState } from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import ConfirmDialog from './confirm-dialog'
import DialogV2 from './dialog'
import RemoveDialog from './remove-dialog'

const Template: StoryFn<typeof DialogV2> = args => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button onClick={() => setOpen(true)}>open dialog</button>
            <DialogV2
                {...args}
                open={open}
                primaryButtonAction={() => setOpen(!open)}
            />
        </>
    )
}

const TemplateWithRemoveDialog: StoryFn<typeof RemoveDialog> = args => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button onClick={() => setOpen(true)}>open dialog</button>
            <RemoveDialog
                {...args}
                open={open}
                onCancel={() => setOpen(false)}
                onConfirm={() => setOpen(false)}
            />
        </>
    )
}

const TemplateWithConfirmDialog: StoryFn<typeof ConfirmDialog> = args => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button onClick={() => setOpen(true)}>open dialog</button>
            <ConfirmDialog
                {...args}
                open={open}
                onCancel={() => setOpen(false)}
                onConfirm={() => setOpen(false)}
            />
        </>
    )
}

export const Default = Template.bind({})
Default.args = {
    primaryButtonText: 'Close'
}

export const DialogRemove = TemplateWithRemoveDialog.bind({})
export const DialogConfirm = TemplateWithConfirmDialog.bind({})

export default {
    title: 'Experimental/Dialog',
    component: DialogV2,
    subcomponents: { DialogConfirm, DialogRemove },
    args: {
        title: 'dialog title',
        text: 'A content here!',
        open: false
    }
} as Meta<typeof DialogV2>
