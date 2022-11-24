import { mount } from '@cypress/react'
import { Given } from 'cypress-cucumber-preprocessor/steps'
import { generateMock, generateSpy } from 'cypress/support/component'
import {
    AvatarVariant,
    BadgeVariant
} from 'cypress/support/types-interfaces-enums'
import React from 'react'
import { Advertise, Avatar, Badge, Box } from 'src'
import { BadgeProps } from 'src/core/Badge'

Given('I render Advertise', () => {
    let author = ''
    let comment = ''

    generateMock({ value: 'advertise-author', type: 'Name' }).then(e => {
        author = typeof e === 'string' ? e : e.toString()
        generateMock({ value: 'advertise-comment', type: 'Words' })
            .then(e => (comment = typeof e === 'string' ? e : e.toString()))
            .then(() => mount(<Advertise author={ author } comment={ comment } />))
    })
})

Given('I render Avatar with {string} preset', (preset: AvatarVariant) => {
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
        mount(<Avatar { ...params } />)
    })
})

Given('I render Badge with {string} preset', (preset: BadgeVariant) => {
    const onClickSpy = generateSpy('badge-children')
    let params: BadgeProps
    let counter: number
    generateMock({
        value: 'badge-counter',
        type: 'Number',
        options: { min: 1, max: 99 }
    }).then(mockCounter => {
        counter = Number(mockCounter)
        generateMock({ value: 'badge-children', type: 'JSXButton', options: {
            onClick: onClickSpy
        } }).then(mockChildren => {
            switch (preset) {
                case 'primary':
                    params = {
                        color: 'primary',
                        children: 'Badge',
                        counter
                    }
                    break

                case 'secondary':
                    params = {
                        counter,
                        color: 'secondary',
                        children: mockChildren
                    }
                    break
                case 'with-dot':
                    params = {
                        counter,
                        variant: 'dot',
                        color: 'primary',
                        children: 'Badge'
                    }
                    break
                default:
                    params = { children: 'Badge', counter }
                    break
            }
            mount(<Badge { ...params } />)
        })
    })
})

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
