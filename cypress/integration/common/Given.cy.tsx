import { mount } from '@cypress/react'
import { Given } from 'cypress-cucumber-preprocessor/steps'
import { generateMock } from '../../support/component'
import {
    AvatarVariant,
    BadgeVariant
} from '../../support/types-interfaces-enums'
import React from 'react'
import { Box } from '../../../src'
import {
    AdvertiseFactory,
    AvatarFactory,
    BadgeFactory
} from '../../support/factories'

Given('I render Advertise', () => AdvertiseFactory())

Given('I render Avatar with {string} preset', (preset: AvatarVariant) =>
    AvatarFactory(preset))

Given('I render Badge with {string} preset', (preset: BadgeVariant) =>
    BadgeFactory(preset))

Given('I render Box', () => {
    generateMock({ value: 'box-params', type: 'BoxParams' }).then(params => {
        if (params instanceof Object && 'minHeight' in params) {
            generateMock({ value: 'box-children', type: 'Words' }).then(e => {
                const child = typeof e === 'string' ? e : e.toString()
                mount(<Box { ...params }>{ child }</Box>)
            })
        } else {
            throw new Error('Invalid mock generation')
        }
    })
})
