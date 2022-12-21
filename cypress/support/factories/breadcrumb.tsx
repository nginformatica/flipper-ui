import React from 'react'
import { Breadcrumb, Link } from '../../../src'
import { mount } from 'cypress/react'
import { generateMock } from '../component'

const DEFAULT_LIST_ITENS = 2

export const BreadcrumbFactory = (size?: number) =>
    generateMock({
        value: 'breadcrumb-links',
        type: 'ListOfWords',
        options: { length: size ?? DEFAULT_LIST_ITENS }
    }).then(params => {
        if (params instanceof Array) {
            const listOfLinks: JSX.Element[] = []

            for (const word of params) {
                listOfLinks.push(
                    <Link color='inherit' href={`route-${word}`}>
                        {word}
                    </Link>
                )
            }

            mount(
                <Breadcrumb data-cy='breadcrumb-container'>
                    {...listOfLinks}
                </Breadcrumb>
            )
        } else {
            throw new Error('Invalid mock generation')
        }
    })
