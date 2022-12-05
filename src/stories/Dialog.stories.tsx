import React, { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import Dialog from '../core/Dialog'
import Button from '../core/Button'
import Typography from '../core/Typography'

export default {
    title: 'Dialog',
    component: Dialog
} as ComponentMeta<typeof Dialog>

export const Default = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open dialog</Button>
            <Dialog
                open={open}
                title='My beautiful Dialog'
                text={'Is not it?'}
                onClose={() => setOpen(false)}
                actions={
                    <Button onClick={() => setOpen(false)}>Close dialog</Button>
                }
            />
        </>
    )
}

export const WithAlertOnClose = () => {
    const [open, setOpen] = useState(false)
    const handleClose = (e: Event) => {
        e.preventDefault()
        alert('I prevented dialog to close')
    }

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open dialog</Button>
            <Dialog
                open={open}
                title='My beautiful Dialog'
                text={'Is not it?'}
                onClose={handleClose}
                actions={
                    <Button onClick={() => setOpen(false)}>Close dialog</Button>
                }
            />
        </>
    )
}

export const WithTypography = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open dialog</Button>
            <Dialog
                open={open}
                title={
                    <Typography color='primary'>
                        Title with Typography
                    </Typography>
                }
                text='Simple Text'
                onClose={() => setOpen(false)}
                actions={
                    <Button onClick={() => setOpen(false)}>Close dialog</Button>
                }
            />
        </>
    )
}
