import { mount } from 'cypress/react18'
import React from 'react'
import { Paper } from '../../../src'
import { PaperProps } from '../../../src/core/Paper'
import { generateMockList } from '../component'

export const PaperFactory = () => {
    generateMockList({
        value: 'paper-params',
        type: ['Word', 'GenericStyleParams']
    }).then(mockedList => {
        const defaultProps = {
            ...mockedList[1],
            'data-cy': 'paper-container'
        } as PaperProps

        mount(<Paper {...defaultProps}>{mockedList[0]}</Paper>)
    })
}
