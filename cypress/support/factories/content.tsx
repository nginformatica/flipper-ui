import React from 'react'
import { mount } from 'cypress/react'
import { Content } from '../../../src'
import { generateMock } from '../component'

export const ContentFactory = () => {
    generateMock({ value: 'content-content', type: 'Words' }).then(
        mockedWords => {
            generateMock({
                value: 'content-style',
                type: 'GenericStyleParams'
            }).then(props => {
                if (props instanceof Object) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    mount(<Content {...props}>{mockedWords}</Content>)
                }
            })
        }
    )
}
