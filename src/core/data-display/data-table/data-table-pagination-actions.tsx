import React from 'react'
import type { MouseEvent } from 'react'
import {
    FirstPage,
    LastPage,
    KeyboardArrowLeft,
    KeyboardArrowRight
} from '@mui/icons-material'
import IconButton from '@/core/inputs/icon-button'
import { PaginationWrapper } from './styles'

interface DataTablePaginationActionsProps {
    count: number
    page: number
    rowsPerPage: number
    onPageChange(event: MouseEvent<HTMLButtonElement>, newPage: number): void
}

interface DataTablePaginationActionsBuilder {
    showFirstButton?: boolean
    showLastButton?: boolean
    clickable?: boolean
}

export const makeDataTablePaginationActions =
    ({
        showFirstButton,
        showLastButton,
        clickable
    }: DataTablePaginationActionsBuilder) =>
    ({
        count,
        page,
        rowsPerPage,
        onPageChange
    }: DataTablePaginationActionsProps) => {
        const totalPages = Math.ceil(count / rowsPerPage) - 1

        const handleFirstPageButtonClick = (
            event: MouseEvent<HTMLButtonElement>
        ) => {
            onPageChange(event, 0)
        }

        const handleBackButtonClick = (
            event: MouseEvent<HTMLButtonElement>
        ) => {
            onPageChange(event, page - 1)
        }

        const handleNextButtonClick = (
            event: MouseEvent<HTMLButtonElement>
        ) => {
            onPageChange(event, page + 1)
        }

        const handleLastPageButtonClick = (
            event: MouseEvent<HTMLButtonElement>
        ) => {
            onPageChange(event, Math.max(0, totalPages))
        }

        return (
            <PaginationWrapper>
                {showFirstButton && (
                    <IconButton
                        disabled={page === 0 || clickable}
                        aria-label='first page'
                        onClick={handleFirstPageButtonClick}>
                        <FirstPage />
                    </IconButton>
                )}
                <IconButton
                    disabled={page === 0 || clickable}
                    aria-label='previous page'
                    onClick={handleBackButtonClick}>
                    <KeyboardArrowLeft />
                </IconButton>
                <IconButton
                    disabled={page >= totalPages || clickable}
                    aria-label='next page'
                    onClick={handleNextButtonClick}>
                    <KeyboardArrowRight />
                </IconButton>
                {showLastButton && (
                    <IconButton
                        disabled={page >= totalPages || clickable}
                        aria-label='last page'
                        onClick={handleLastPageButtonClick}>
                        <LastPage />
                    </IconButton>
                )}
            </PaginationWrapper>
        )
    }
