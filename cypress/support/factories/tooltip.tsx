import React from 'react'
import { mount } from 'cypress/react18'
import { Tooltip, Button } from '../../../src'
import { generateSpy } from '../component'
import style from 'styled-components'

const OutsideBox = style.div`
    width: 100%;
    height: 350px;
`

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
            <OutsideBox data-testid='testing-outside-click'></OutsideBox>
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
