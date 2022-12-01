import { mount } from 'cypress/react'
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
            ...mockedList[1]
        } as PaperProps

        mount(<Paper {...defaultProps}>{mockedList[0]}</Paper>)
    })
}
