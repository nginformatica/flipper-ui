import React, { useState } from 'react'
import type { Meta } from '@storybook/react'
import Typography from '@/core/data-display/typography'
import Button from '@/core/inputs/button'
import Dialog from '.'

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
                actions={
                    <Button onClick={() => setOpen(false)}>Close dialog</Button>
                }
                onClose={() => setOpen(false)}
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
                actions={
                    <Button onClick={() => setOpen(false)}>Close dialog</Button>
                }
                onClose={handleClose}
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
                actions={
                    <Button onClick={() => setOpen(false)}>Close dialog</Button>
                }
                onClose={() => setOpen(false)}
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
                actions={
                    <Button onClick={() => setOpen(false)}>Close dialog</Button>
                }
                snippet='const a = 1'
                onClose={() => setOpen(false)}
            />
        </>
    )
}
