import React, { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import Grow from '../core/Grow'
import Button from '../core/Button'

export default {
    title: 'Grow',
    component: Grow,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Grow>

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
                color='primary'
                variant='contained'
                onClick={ handleClick }
                style={ { marginRight: '3em' } }>
                { label }
            </Button>
            <Grow in={ open } timeout={ { enter: 500, exit: 500 } }>
                <span>I am open for discussions</span>
            </Grow>
        </>
    )
}