import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import Dialog from '.'
import Button from '@/core/inputs/Button'
import Typography from '@/core/data-display/Typography'

export default {
    title: 'Feedback/Dialog',
    component: Dialog
} as Meta<typeof Dialog>

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

export const WithSnippet = () => {
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
                snippet='const a = 1'
            />
        </>
    )
}
