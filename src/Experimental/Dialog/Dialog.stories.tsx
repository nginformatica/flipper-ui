import React from 'react'
import DialogV2 from './Dialog'
import ConfirmDialogComponent from './ConfirmDialog'
import RemoveDialogComponent from './RemoveDialog'
import { Meta, StoryFn } from '@storybook/react'

const Template: StoryFn<typeof DialogV2> = args => {
    const [open, setOpen] = React.useState(false)

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

const TemplateWithRemoveDialog: StoryFn<
    typeof RemoveDialogComponent
> = args => {
    const [open, setOpen] = React.useState(false)

    return (
        <>
            <button onClick={() => setOpen(true)}>open dialog</button>
            <RemoveDialogComponent
                {...args}
                open={open}
                onCancel={() => setOpen(false)}
                onConfirm={() => setOpen(false)}
            />
        </>
    )
}

const TemplateWithConfirmDialog: StoryFn<
    typeof ConfirmDialogComponent
> = args => {
    const [open, setOpen] = React.useState(false)

    return (
        <>
            <button onClick={() => setOpen(true)}>open dialog</button>
            <ConfirmDialogComponent
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

export const RemoveDialog = TemplateWithRemoveDialog.bind({})
export const ConfirmDialog = TemplateWithConfirmDialog.bind({})

export default {
    title: 'experimental/Dialog',
    component: DialogV2,
    subcomponents: { ConfirmDialog, RemoveDialog },
    args: {
        title: 'dialog title',
        text: 'A content here!',
        open: false
    }
} as Meta<typeof DialogV2>
