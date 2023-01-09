import React, { useState } from 'react'
import { mount } from 'cypress/react18'
import { Button, Fade } from '../../../src'
import { generateMock } from '../component'

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
            <Fade data-cy='fade-container' in={open}>
                <span id='fade-test-id'>{props.text}</span>
            </Fade>
        </>
    )
}

export const FadeFactory = () => {
    generateMock({ value: 'fade-content', type: 'Words' }).then(mockedWords => {
        if (typeof mockedWords === 'string') {
            mount(<Component text={mockedWords} />)
        }
    })
}
