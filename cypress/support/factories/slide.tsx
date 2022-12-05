import React, { useState } from 'react'
import { mount } from 'cypress/react'
import { Button, Slide } from '../../../src'
import { generateMock } from '../component'

interface IProps {
    children: JSX.Element
}

const Component: React.FC<IProps> = props => {
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
            <Slide direction='left' timeout={300} in={open}>
                {props.children}
            </Slide>
        </>
    )
}

export const SlideFactory = () => {
    generateMock({ value: 'slide-content', type: 'Words' }).then(
        mockedWords => {
            if (typeof mockedWords === 'string') {
                mount(
                    <Component>
                        <span id='slide-test-id'>{mockedWords}</span>
                    </Component>
                )
            }
        }
    )
}
