import React from 'react'
import { mount } from '@cypress/react'
import { Given } from 'cypress-cucumber-preprocessor/steps'
import Advertise from '../../../src/core/Advertise'
import { generateMock } from '../../support/component'

Given('I render Advertise', () => {
    let author = ''
    let comment = ''

    generateMock('advertise-author', 'Name').then(e => {
        author = e
        generateMock('advertise-comment', 'Words')
            .then(e => comment = e)
            .then(() => mount(<Advertise author={ author } comment={ comment } />))
    })
})
