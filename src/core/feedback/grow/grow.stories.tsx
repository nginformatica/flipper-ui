import React, { useState } from 'react'
import type { Meta } from '@storybook/react'
import { Button } from '@/core/inputs/button'
import { Grow } from '.'

export default {
    title: 'Feedback/Grow',
    component: Grow,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as Meta<typeof Grow>

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
                color='primary'
                variant='contained'
                style={{ marginRight: '3em' }}
                onClick={handleClick}>
                {label}
            </Button>
            <Grow in={open} timeout={{ enter: 500, exit: 500 }}>
                <span>I am open for discussions</span>
            </Grow>
        </>
    )
}
