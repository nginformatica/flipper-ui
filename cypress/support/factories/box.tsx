import { mount } from 'cypress/react'
import React from 'react'
import { Box } from '../../../src'
import { generateMock } from '../component'

export const BoxFactory = () =>
    generateMock({ value: 'box-params', type: 'BoxParams' }).then(params => {
        if (params instanceof Object && 'minHeight' in params) {
            generateMock({ value: 'box-children', type: 'Words' }).then(e => {
                const child = typeof e === 'string' ? e : e.toString()
                mount(<Box {...params}>{child}</Box>)
            })
        } else {
            throw new Error('Invalid mock generation')
        }
    })
