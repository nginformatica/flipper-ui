import React from 'react'
import { mount } from 'cypress/react'
import { Fab } from '../../../src'
import { generateSpy } from '../component'

export const FabFactory = () => {
    const onClickSpy = generateSpy('fab-onclick')
    mount(
        <Fab data-cy='fab-container' onClick={onClickSpy}>
            <span>Fab</span>
        </Fab>
    )
}
