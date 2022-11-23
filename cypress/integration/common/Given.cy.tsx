import React from 'react'
import { mount } from '@cypress/react'
import { Given } from 'cypress-cucumber-preprocessor/steps'
import Advertise from '../../../src/core/Advertise'
import Avatar from '../../../src/core/Avatar'
import { generateMock } from '../../support/component'
import { AvatarVariant } from 'support/types-interfaces-enums'

Given('I render Advertise', () => {
    let author = ''
    let comment = ''

    generateMock('advertise-author', 'Name').then(e => {
        author = e
        generateMock('advertise-comment', 'Words')
            .then(e => (comment = e))
            .then(() => mount(<Advertise author={ author } comment={ comment } />))
    })
})

Given('I render Avatar with {string} preset', (preset: AvatarVariant) => {
    generateMock('avatar-children', 'Letter').then(mock => {
        let params = {}
        switch (preset) {
            case 'primary':
                params = Object.assign({}, { primary: true })
                break

            case 'with-children':
                params = Object.assign({}, { children: mock, primary: true })
                break
            default:
                break
        }
        mount(<Avatar { ...params } />)
    })
})
