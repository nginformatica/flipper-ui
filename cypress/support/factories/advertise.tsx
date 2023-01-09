import { mount } from 'cypress/react18'
import React from 'react'
import { generateMock } from '../../support/component'
import { Advertise } from '../../../src'

export const AdvertiseFactory = () => {
    let author = ''
    let comment = ''

    return generateMock({ value: 'advertise-author', type: 'Name' }).then(e => {
        author = typeof e === 'string' ? e : e.toString()
        generateMock({ value: 'advertise-comment', type: 'Words' })
            .then(e => (comment = typeof e === 'string' ? e : e.toString()))
            .then(() =>
                mount(
                    <Advertise
                        author={author}
                        comment={comment}
                        data-cy='advertise-container'
                    />
                )
            )
    })
}
