import React from 'react'
import { inc, times } from 'ramda'
import type { DefaultProps } from '../../types'
import Button from '@/core/inputs/button'
import { Content } from './styles'
import {
    KeyboardArrowLeft as IconArrowLeft,
    KeyboardArrowRight as IconArrowRight
} from '@/icons'

export interface PaginationProps extends DefaultProps {
    pages?: number
    active: number
    onNext: () => void
    onPrevious: () => void
    onNavigate: (page: number) => void
}

const Pagination = (props: PaginationProps) => {
    const {
        active,
        style,
        padding,
        margin,
        pages = 1,
        className,
        onNavigate,
        onNext,
        onPrevious,
        ...rest
    } = props
    const allPages = times(inc, pages)

    return (
        <Content
            {...rest}
            className={className}
            style={{ padding, margin, ...style }}>
            <Button
                id='prev-page-button'
                data-testid='prev-page-button'
                size='small'
                onClick={onPrevious}>
                <IconArrowLeft />
            </Button>
            {allPages.map(page => (
                <Button
                    size='small'
                    data-testid={`pagination-page-${page}`}
                    key={page}
                    id={`pagination-page-${page}`}
                    color={page === active ? 'primary' : 'default'}
                    onClick={() => onNavigate(page)}>
                    {page}
                </Button>
            ))}
            <Button
                id='next-page-button'
                data-testid='next-page-button'
                size='small'
                onClick={onNext}>
                <IconArrowRight />
            </Button>
        </Content>
    )
}

export default Pagination
