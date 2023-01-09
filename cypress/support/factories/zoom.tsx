import React, { useState } from 'react'
import { mount } from 'cypress/react18'
import { Button, Zoom } from '../../../src'
import { generateMock } from '../component'
import { omit } from 'ramda'

interface IProps {
    text: string
}

const Component: React.FC<IProps> = props => {
    const [open, setOpen] = useState(true)
    const [label, setLabel] = useState('Close')

    function handleClick() {
        setOpen(!open)
        label === 'Close' ? setLabel('Open') : setLabel('Close')
    }

    return (
        <>
            <Button
                style={{ marginRight: '3em' }}
                variant='contained'
                color='primary'
                onClick={handleClick}>
                {label}
            </Button>
            <Zoom {...omit(['text'], props)} in={open}>
                <span id='zoom-test-id'>{props.text}</span>
            </Zoom>
        </>
    )
}

export const ZoomFactory = () => {
    generateMock({ value: 'zoom-content', type: 'Words' }).then(mockedWords => {
        if (typeof mockedWords === 'string') {
            mount(<Component data-cy='zoom-container' text={mockedWords} />)
        }
    })
}
