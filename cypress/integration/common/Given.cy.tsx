import React from 'react'
import { mount } from '@cypress/react'
import { Given } from 'cypress-cucumber-preprocessor/steps'
import Advertise from '../../../src/core/Advertise'
import Avatar from '../../../src/core/Avatar'
import Box from '../../../src/core/Box'
import Badge, { BadgeProps } from '../../../src/core/Badge'
import { generateMock, generateSpy } from '../../support/component'
import { AvatarVariant, BadgeVariant } from 'support/types-interfaces-enums'

Given('I render Advertise', () => {
    let author = ''
    let comment = ''

    generateMock('advertise-author', 'Name').then(e => {
        author = typeof e === 'string' ? e : e.toString()
        generateMock('advertise-comment', 'Words')
            .then(e => (comment = typeof e === 'string' ? e : e.toString()))
            .then(() => mount(<Advertise author={ author } comment={ comment } />))
    })
})

Given('I render Avatar with {string} preset', (preset: AvatarVariant) => {
    generateMock('avatar-children', 'Letter', { length: 1 }).then(mock => {
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
    generateMock('badge-counter', 'Number', { min: 1, max: 99 }).then(
        mockCounter => {
            counter = Number(mockCounter)
            generateMock('badge-children', 'JSXButton', {
                onClick: onClickSpy
            }).then(mockChildren => {
                switch (preset) {
                    case 'primary':
                        params = { color: 'primary', children: 'Badge', counter }
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

        }
    )
})

Given('I render Box', () => {
    generateMock('box-params', 'BoxParams').then(params => {
        if(params instanceof Object && 'minHeight' in params) {
            generateMock('box-children', 'Words').then(e => {
                const child = typeof e === 'string' ? e : e.toString()
                mount(<Box { ...params }>{ child }</Box>)
            })
        } else {
            throw new Error('Invalid mock generation')

        }
    })
})
