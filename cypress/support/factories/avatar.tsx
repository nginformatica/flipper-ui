import { mount } from 'cypress/react'
import React from 'react'
import { generateMock } from '../../support/component'
import { Avatar } from '../../../src'
import { AvatarVariant } from '../types-interfaces-enums'

export const AvatarFactory = (preset: AvatarVariant) =>
    generateMock({
        value: 'avatar-children',
        type: 'Letter',
        options: { length: 1 }
    }).then(mock => {
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
        mount(<Avatar {...params} />)
    })
