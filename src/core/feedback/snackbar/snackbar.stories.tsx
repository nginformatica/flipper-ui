import React, { useState } from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import { Button } from '@/core/inputs/button'
import Snackbar from '.'

export default {
    title: 'Feedback/Snackbar',
    component: Snackbar
} as Meta<typeof Snackbar>

const Template: StoryFn<typeof Snackbar> = args => {
    const [btnState, setBtnState] = useState(false)
    const [open, setOpen] = useState(false)

    function handleClick() {
        setOpen(!open)
        setBtnState(true)
    }

    function handleClose() {
        setOpen(!open)
        setBtnState(false)
    }

    return (
        <>
            <Button
                disabled={btnState}
                style={{ marginRight: '3em' }}
                variant='contained'
                color='primary'
                onClick={handleClick}>
                Open
            </Button>
            <Snackbar {...args} open={open} onClose={handleClose} />
        </>
    )
}

export const Default = Template.bind({})
Default.args = {
    anchorOrigin: {
        horizontal: 'right',
        vertical: 'bottom'
    },
    message:
        'I give what I have got to give, I give what I need to live,\
     I give what I have got to give, It is important if I wanna live!'
}

export const Success = Template.bind({})
Success.args = {
    variant: 'success',
    message: 'In the town where I was born, Lived a man who sailed to sea',
    children: 'Snackbar'
}

export const Warning = Template.bind({})
Warning.args = {
    variant: 'warning',
    message: 'In the town where I was born, Lived a man who sailed to sea',
    children: 'Snackbar'
}

export const Error = Template.bind({})
Error.args = {
    variant: 'error',
    message: 'In the town where I was born, Lived a man who sailed to sea',
    children: 'Snackbar'
}

/*
export const WithLongDuration = Template.bind({})
WithLongDuration.args = {
    variant: 'info',
    // transitionDuration: { enter: 0, exit: 200 },
    message: 'In the town where I was born, Lived a man who sailed to sea',
    children: 'Snackbar'
}
*/
