import React from 'react'
import type { ChangeEvent, CSSProperties, MouseEvent } from 'react'
import MuiTablePagination from '@mui/material/TablePagination'
import type { TablePaginationProps } from '@mui/material/TablePagination'
import { theme } from '@/theme'

const { gray } = theme.colors

interface ITablePaginationProps
    extends Omit<
        TablePaginationProps,
        | 'component'
        | 'count'
        | 'page'
        | 'rowsPerPage'
        | 'onPageChange'
        | 'onRowsPerPageChange'
    > {
    count: number
    page: number
    rowsPerPage: number
    rowsPerPageOptions?: number[]
    onPageChange: (
        event: MouseEvent<HTMLButtonElement> | null,
        page: number
    ) => void
    onRowsPerPageChange: (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void
    style?: CSSProperties
}

const TablePagination = ({
    count,
    page,
    rowsPerPage,
    rowsPerPageOptions,
    onPageChange,
    onRowsPerPageChange,
    style,
    padding,
    ...props
}: ITablePaginationProps) => {
    return (
        <MuiTablePagination
            count={count}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={
                rowsPerPageOptions ? rowsPerPageOptions : [5, 10, 25]
            }
            labelRowsPerPage='Linhas por página:'
            labelDisplayedRows={({ from, to, count }) => {
                return `${from}-${to} de ${count !== -1 ? count : `mais que ${to}`}`
            }}
            style={{
                borderColor: gray[200],
                padding,
                ...style
            }}
            sx={{
                borderBottom: `1px solid ${gray[200]} !important;`
            }}
            onPageChange={onPageChange}
            onRowsPerPageChange={onRowsPerPageChange}
            {...props}
        />
    )
}

export default TablePagination
