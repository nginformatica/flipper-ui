import React, { useState } from 'react'
import type { Meta } from '@storybook/react'
import { Button } from '@/core/inputs/button'
import { Zoom } from '.'

export default {
    title: 'Feedback/Zoom',
    component: Zoom
} as Meta<typeof Zoom>

export const Default = () => {
    const [open, setOpen] = useState(true)
    const [btnLabel, setBtnLabel] = useState('Close')

    function handleClick() {
        setOpen(!open)

        if (btnLabel === 'Close') {
            setBtnLabel('Open')
        } else {
            setBtnLabel('Close')
        }
    }

    return (
        <>
            <Button
                color='primary'
                variant='contained'
                style={{ marginRight: '3em' }}
                onClick={handleClick}>
                {btnLabel}
            </Button>
            <Zoom in={open}>
                <span>I am open for discussions</span>
            </Zoom>
        </>
    )
}
