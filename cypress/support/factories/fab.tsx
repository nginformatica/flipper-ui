import React from 'react'
import { mount } from 'cypress/react'
import { Fab } from '../../../src'
import { generateSpy } from '../component'

export const FabFactory = () => {
    const onClickSpy = generateSpy('fab-onclick')
    mount(
        <Fab onClick={onClickSpy}>
            <span>Fab</span>
        </Fab>
    )
}