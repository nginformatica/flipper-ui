import React from 'react'
import { mount } from 'cypress/react'
import { generateSpy, generateMock } from '../component'
import { Badge } from '../../../src'
import { BadgeVariant } from '../types-interfaces-enums'
import { BadgeProps } from '../../../src/core/Badge'

export const BadgeFactory = (preset: BadgeVariant) => {
    const onClickSpy = generateSpy('badge-children')
    let params: BadgeProps
    let counter: number
    generateMock({
        value: 'badge-counter',
        type: 'Number',
        options: { min: 1, max: 99 }
    }).then(mockCounter => {
        counter = Number(mockCounter)
        generateMock({
            value: 'badge-children',
            type: 'JSXButton',
            options: {
                onClick: onClickSpy
            }
        }).then(mockChildren => {
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
            mount(<Badge {...params} />)
        })
    })
}
