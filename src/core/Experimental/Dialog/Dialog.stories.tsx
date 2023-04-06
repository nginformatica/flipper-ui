import React from 'react'
import DialogV2 from './Dialog'
import ConfirmDialogComponent from './ConfirmDialog'
import RemoveDialogComponent from './RemoveDialog'

export const Dialog = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <>
            <button onClick={() => setOpen(true)}>open dialog</button>
            <DialogV2
                open={open}
                title='dialog title'
                primaryButtonText='Close'
                primaryButtonAction={() => setOpen(!open)}
                text={'A content here!'}
            />
        </>
    )
}

export const RemoveDialog = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <>
            <button onClick={() => setOpen(true)}>open dialog</button>
            <RemoveDialogComponent
                open={open}
                text='COD123'
                onCancel={() => setOpen(false)}
                onConfirm={() => setOpen(false)}
            />
        </>
    )
}

export const ConfirmDialog = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <>
            <button onClick={() => setOpen(true)}>open dialog</button>
            <ConfirmDialogComponent
                open={open}
                title='dialog title'
                text='A content here!'
                onCancel={() => setOpen(false)}
                onConfirm={() => setOpen(false)}
            />
        </>
    )
}

export default {
    title: 'experimental/Dialog',
    component: DialogV2,
    subcomponents: { ConfirmDialog, RemoveDialog }
}
