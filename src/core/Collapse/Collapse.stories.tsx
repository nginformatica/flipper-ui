import React, { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Collapse from '.'
import Button from '../Button'

export default {
    title: 'Collapse',
    component: Collapse
} as Meta<typeof Collapse>

const Template: StoryFn<typeof Collapse> = args => <Collapse {...args} />

export const Default = () => {
    const [open, setOpen] = useState(true)
    const [buttonLabel, setButtonLabel] = useState('Close')

    function handleClick() {
        setOpen(!open)
        !open ? setButtonLabel('Close') : setButtonLabel('Open')
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
