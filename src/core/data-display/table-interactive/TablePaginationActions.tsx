import React from 'react'
import type { MouseEvent } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@/core/inputs/icon-button'
import {
    IconFirstPage,
    IconLastPage,
    IconNavigateBefore,
    IconNavigateNext
} from '@/icons/mui'

interface TablePaginationActionsProps {
    page: number
    count: number
    rowsPerPage: number
    onPageChange: (
        event: MouseEvent<HTMLButtonElement>,
        newPage: number
    ) => void
}

export const TablePaginationActions = (props: TablePaginationActionsProps) => {
    const { count, page, rowsPerPage, onPageChange } = props

    const handleFirstPageButtonClick = (
        event: MouseEvent<HTMLButtonElement>
    ) => {
        onPageChange(event, 0)
    }

    const handleBackButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1)
    }

    const handleNextButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1)
    }

    const handleLastPageButtonClick = (
        event: MouseEvent<HTMLButtonElement>
    ) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
    }

    return (
        <Box sx={{ flexShrink: 0, margin: '0 0 0 16px' }}>
            <IconButton
                aria-label='first page'
                disabled={page === 0}
                onClick={handleFirstPageButtonClick}>
                <IconFirstPage />
            </IconButton>
            <IconButton
                aria-label='previous page'
                disabled={page === 0}
                onClick={handleBackButtonClick}>
                <IconNavigateBefore />
            </IconButton>
            <IconButton
                aria-label='next page'
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                onClick={handleNextButtonClick}>
                <IconNavigateNext />
            </IconButton>
            <IconButton
                aria-label='last page'
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                onClick={handleLastPageButtonClick}>
                <IconLastPage />
            </IconButton>
        </Box>
    )
}
