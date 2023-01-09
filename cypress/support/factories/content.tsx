import React from 'react'
import { mount } from 'cypress/react18'
import { Content } from '../../../src'
import { generateMock } from '../component'

export const ContentFactory = () => {
    generateMock({ value: 'content-content', type: 'Words' }).then(
        mockedWords => {
            generateMock({
                value: 'content-style',
                type: 'GenericStyleParams'
            }).then(mockedProps => {
                if (mockedProps instanceof Object) {
                    const props = Object.assign({}, mockedProps, {
                        'data-cy': 'content-container'
                    })
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    mount(<Content {...props}>{mockedWords}</Content>)
                }
            })
        }
    )
}
