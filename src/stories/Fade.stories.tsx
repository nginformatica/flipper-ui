import React, { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import Fade from '../core/Fade'
import Button from '../core/Button'

export default {
    title: 'Fade',
    component: Fade
} as ComponentMeta<typeof Fade>

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
