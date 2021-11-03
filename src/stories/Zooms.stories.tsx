import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Zoom from '../core/Zoom'
import Button from '../core/Button'

export default {
    title: 'Zoom',
    component: Zoom
} as ComponentMeta<typeof Zoom>

const Template: ComponentStory<typeof Zoom> = args => {
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
                style={ { marginRight: '3em' } }
                onClick={ handleClick }>
                { btnLabel }
            </Button>
            <Zoom { ...args } in={ open }>
                <span>{ args.children }</span>
            </Zoom>
        </>
    )
}

export const Default = Template.bind({})
Default.args = {
    children: 'I am open for discussions'
}
