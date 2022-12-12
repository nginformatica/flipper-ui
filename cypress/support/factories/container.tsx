import React from 'react'
import { mount } from 'cypress/react'
import { Container } from '../../../src'
import { generateMock } from '../component'

export const ContainerFactory = () => {
    generateMock({ value: 'container-content', type: 'Words' }).then(
        mockedWords => {
            generateMock({
                value: 'container-style',
                type: 'GenericStyleParams'
            }).then(props => {
                if (props instanceof Object) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    mount(<Container {...props}>{mockedWords}</Container>)
                }
            })
        }
    )
}
