import React, { useState } from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import Button from '@/core/inputs/button'
import Slide from '.'

export default {
    title: 'Feedback/Slide',
    component: Slide
} as Meta<typeof Slide>

const Template: StoryFn<typeof Slide> = args => {
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
            <Slide {...args} in={open} />
        </>
    )
}

export const Default = Template.bind({})
Default.args = {
    direction: 'left',
    timeout: 300,
    children: <span>Im not open for discussions.</span>
}
