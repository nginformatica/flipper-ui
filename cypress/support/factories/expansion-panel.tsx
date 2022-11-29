import { mount } from 'cypress/react'
import React from 'react'
import { Generators } from '../'
import { ExpansionPanel } from '../../../src'
import { generateMockList, generateSpy } from '../component'

export const ExpansionPanelFactory = () => {
    const onHelperClickSpy = generateSpy('expansion-panel-on-helper-click')
    const onConfirmClickSpy = generateSpy('expansion-panel-on-confirm-click')
    generateMockList({
        value: 'expansion-panel-content',
        type: ['Word', 'Words', 'Words']
    }).then(([summary, body, footer]) => {
        const props = Generators.generateExpansionPanelProps({
            onHelperClick: onHelperClickSpy,
            onConfirmClick: onConfirmClickSpy,
            summary: typeof summary === 'string' ? summary : '',
            detailsBody: typeof body === 'string' ? body : '',
            detailsFooter: typeof footer === 'string' ? footer : ''
        })

        mount(<ExpansionPanel {...props} />)
    })
}
