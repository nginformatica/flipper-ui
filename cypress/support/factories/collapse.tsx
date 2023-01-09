import { mount } from 'cypress/react18'
import React, { useState } from 'react'
import { Collapse, Button } from '../../../src'
import { generateMock } from '../component'

type TProps = {
    colapseText: string
}

const Component: React.FC<TProps> = props => {
    const [open, setOpen] = useState(true)
    const [buttonLabel, setButtonLabel] = useState('Close')

    function handleClick() {
        setOpen(!open)
        !open ? setButtonLabel('Close') : setButtonLabel('Open')
    }

    return (
        <>
            <Collapse data-cy='collapse-container' in={open}>
                {' '}
                {props.colapseText}{' '}
            </Collapse>
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

export const CollapseFactory = () => {
    generateMock({
        value: 'collapse-content',
        type: 'Words'
    }).then(words => {
        mount(<Component colapseText={words as string} />)
    })
}
