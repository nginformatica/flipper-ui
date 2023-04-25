import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import Fade from '.'
import Button from '@/core/inputs/Button'

export default {
    title: 'Feedback/Fade',
    component: Fade
} as Meta<typeof Fade>

export const Default = () => {
    const [open, setOpen] = useState(true)
    const [label, setLabel] = useState('Close')

    function handleClick() {
        setOpen(!open)
        label === 'Close' ? setLabel('Open') : setLabel('Close')
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
