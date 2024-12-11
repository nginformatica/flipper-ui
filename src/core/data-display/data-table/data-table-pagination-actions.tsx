import React from 'react'
import type { MouseEvent } from 'react'
import MuiIconButton from '@mui/material/IconButton'
import {
    IconFirstPage,
    IconLastPage,
    IconNavigateBefore,
    IconNavigateNext
} from '@/icons/mui-icons'
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
                    <MuiIconButton
                        disabled={page === 0 || clickable}
                        aria-label='first page'
                        onClick={handleFirstPageButtonClick}>
                        <IconFirstPage />
                    </MuiIconButton>
                )}
                <MuiIconButton
                    disabled={page === 0 || clickable}
                    aria-label='previous page'
                    onClick={handleBackButtonClick}>
                    <IconNavigateBefore />
                </MuiIconButton>
                <MuiIconButton
                    disabled={page >= totalPages || clickable}
                    aria-label='next page'
                    onClick={handleNextButtonClick}>
                    <IconNavigateNext />
                </MuiIconButton>
                {showLastButton && (
                    <MuiIconButton
                        disabled={page >= totalPages || clickable}
                        aria-label='last page'
                        onClick={handleLastPageButtonClick}>
                        <IconLastPage />
                    </MuiIconButton>
                )}
            </PaginationWrapper>
        )
    }
