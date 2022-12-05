import React, { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import Zoom from '../core/Zoom'
import Button from '../core/Button'

export default {
    title: 'Zoom',
    component: Zoom
} as ComponentMeta<typeof Zoom>

export const Default = () => {
    const [open, setOpen] = useState(true)
    const [btnLabel, setBtnLabel] = useState('Close')

    function handleClick() {
        setOpen(!open)
        btnLabel === 'Close' ? setBtnLabel('Open') : setBtnLabel('Close')
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
