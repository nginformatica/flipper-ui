import React, { useState } from 'react'
import type { Meta } from '@storybook/react'
import Button from '@/core/inputs/button'
import Fade from '.'

export default {
    title: 'Feedback/Fade',
    component: Fade
} as Meta<typeof Fade>

export const Default = () => {
    const [open, setOpen] = useState(true)
    const [label, setLabel] = useState('Close')

    function handleClick() {
        setOpen(!open)

        if (label === 'Close') {
            setLabel('Open')
        } else {
            setLabel('Close')
        }
    }

    return (
        <>
            <Button
                style={{ marginRight: '3em' }}
                variant='contained'
                color='primary'
                onClick={handleClick}>
                {label}
            </Button>
            <Fade in={open}>
                <span>I am open for discussions</span>
            </Fade>
        </>
    )
}
