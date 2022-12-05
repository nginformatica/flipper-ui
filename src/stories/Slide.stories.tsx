import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Slide from '../core/Slide'
import Button from '../core/Button'

export default {
    title: 'Slide',
    component: Slide
} as ComponentMeta<typeof Slide>

const Template: ComponentStory<typeof Slide> = args => {
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
