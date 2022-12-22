import React from 'react'
import { mount } from 'cypress/react'
import { Pagination } from '../../../src'
import { Generators } from '..'
import { generateSpy } from '../component'

export const PaginationFactory = () => {
    const onPrevSpy = generateSpy('pagination-prev-onclick')
    const onNextSpy = generateSpy('pagination-next-onclick')
    const onNavigateSpy = generateSpy('pagination-navigation-onclick')

    const props = Generators.generatePaginationProps({
        onNavigate: onNavigateSpy,
        onPreviousPageClick: onPrevSpy,
        onNextPageClick: onNextSpy
    })
    mount(<Pagination data-cy='pagination-container' {...props} />)
}
