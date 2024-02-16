import React, { useState } from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import Button from '@/core/inputs/button'
import Collapse from '.'

export default {
    title: 'Feedback/Collapse',
    component: Collapse
} as Meta<typeof Collapse>

const Template: StoryFn<typeof Collapse> = args => <Collapse {...args} />

export const Default = () => {
    const [open, setOpen] = useState(true)
    const [buttonLabel, setButtonLabel] = useState('Close')

    function handleClick() {
        setOpen(!open)

        if (!open) {
            setButtonLabel('Close')
        } else {
            setButtonLabel('Open')
        }
    }

    return (
        <>
            <Collapse in={open}> I am open for discussions </Collapse>
            <Button
                size='small'
                color='primary'
                style={{ marginTop: '3em' }}
                onClick={handleClick}>
                {buttonLabel}
            </Button>
        </>
    )
}

export const Open = Template.bind({})
Open.args = {
    in: true,
    children: 'I am open for discussions'
}

export const Closed = Template.bind({})
Closed.args = {
    in: false,
    children: 'I am not open for discussions. Please do not insist.'
}
