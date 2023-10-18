import React from 'react'
import IconButton from '@/core/inputs/icon-button'
import FirstPageIcon from '@material-ui/icons/FirstPage'
import LastPageIcon from '@material-ui/icons/LastPage'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

interface DataTablePaginationActionsProps {
    count: number
    page: number
    rowsPerPage: number
    onPageChange(
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number
    ): void
}

interface DataTablePaginationActionsBuilder {
    showFirstButton?: boolean
    showLastButton?: boolean
    clickable?: boolean
}

const PAGINATION_WRAPPER_STYLE = { display: 'flex', marginLeft: '12px' }

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
            event: React.MouseEvent<HTMLButtonElement>
        ) => {
            onPageChange(event, 0)
        }

        const handleBackButtonClick = (
            event: React.MouseEvent<HTMLButtonElement>
        ) => {
            onPageChange(event, page - 1)
        }

        const handleNextButtonClick = (
            event: React.MouseEvent<HTMLButtonElement>
        ) => {
            onPageChange(event, page + 1)
        }

        const handleLastPageButtonClick = (
            event: React.MouseEvent<HTMLButtonElement>
        ) => {
            onPageChange(event, Math.max(0, totalPages))
        }

        return (
            <div style={PAGINATION_WRAPPER_STYLE}>
                {showFirstButton && (
                    <IconButton
                        onClick={handleFirstPageButtonClick}
                        disabled={page === 0 || clickable}
                        aria-label='first page'>
                        <FirstPageIcon />
                    </IconButton>
                )}
                <IconButton
                    onClick={handleBackButtonClick}
                    disabled={page === 0 || clickable}
                    aria-label='previous page'>
                    <KeyboardArrowLeft />
                </IconButton>
                <IconButton
                    onClick={handleNextButtonClick}
                    disabled={page >= totalPages || clickable}
                    aria-label='next page'>
                    <KeyboardArrowRight />
                </IconButton>
                {showLastButton && (
                    <IconButton
                        onClick={handleLastPageButtonClick}
                        disabled={page >= totalPages || clickable}
                        aria-label='last page'>
                        <LastPageIcon />
                    </IconButton>
                )}
            </div>
        )
    }
