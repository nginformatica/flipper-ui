import React from 'react'
import { mount } from 'cypress/react'
import { Tooltip, Button } from '../../../src'
import { generateSpy } from '../component'

interface IProps {
    onOpen: () => void
    onClose: () => void
}

const Component: React.FC<IProps> = props => {
    return (
        <>
            <Tooltip
                {...props}
                onClose={props.onClose}
                onOpen={props.onOpen}
                title='Tooltip'>
                <Button variant='outlined'>Simple tooltip</Button>
            </Tooltip>
            <div data-testid='testing-outside-click'></div>
        </>
    )
}

export const ToolTipFactory = () => {
    const onOpenSpy = generateSpy('tooltip-onopen')
    const onCloseSpy = generateSpy('tooltip-onclose')
    mount(
        <Component
            data-cy='tooltip-container'
            onOpen={onOpenSpy}
            onClose={onCloseSpy}
        />
    )
}
