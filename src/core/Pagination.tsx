import { inc, times } from 'ramda'
import React from 'react'
import styled from 'styled-components'
import {
    KeyboardArrowLeft as IconArrowLeft,
    KeyboardArrowRight as IconArrowRight
} from '../icons'
import { DefaultProps } from './types'
import Button from './Button'

export interface PaginationProps extends DefaultProps {
    pages?: number
    active: number
    onNext: () => void
    onPrevious: () => void
    onNavigate: (page: number) => void
}

const Content = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    justify-content: center;
    margin: 0.75em;
`

const Pagination = (props: PaginationProps) => {
    const { active, style, padding, margin, pages = 1, className } = props
    const allPages = times(inc, pages || 1)

    return (
        <Content className={className} style={{ padding, margin, ...style }}>
            <Button
                id='prev-page-button'
                size='small'
                onClick={props.onPrevious}>
                <IconArrowLeft />
            </Button>
            {allPages.map(page => (
                <Button
                    size='small'
                    key={page}
                    id={`pagination-page-${page}`}
                    color={page === active ? 'primary' : 'default'}
                    onClick={() => props.onNavigate(page)}>
                    {page}
                </Button>
            ))}
            <Button id='next-page-button' size='small' onClick={props.onNext}>
                <IconArrowRight />
            </Button>
        </Content>
    )
}

export default Pagination
