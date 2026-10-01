import React from 'react'
import type { ChangeEvent, CSSProperties, MouseEvent, ReactNode } from 'react'
import MuiTablePagination from '@mui/material/TablePagination'
import type { TablePaginationProps } from '@mui/material/TablePagination'
import { theme } from '@/theme'

const { gray } = theme.colors

// the toolbar lays its children out left to right and the spacer is the first
// of them, so filling the spacer is what puts content opposite the controls
const FOOTER_ACTIONS_SX = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
}

interface ITablePaginationProps extends Omit<
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
    footerActions?: ReactNode
    style?: CSSProperties
}

const TablePagination = ({
    count,
    page,
    rowsPerPage,
    rowsPerPageOptions,
    onPageChange,
    onRowsPerPageChange,
    footerActions,
    slotProps,
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
                borderBottom: `1px solid ${gray[200]}`,
                '&& .MuiTablePagination-toolbar': {
                    paddingLeft: '12px'
                }
            }}
            slotProps={
                footerActions
                    ? {
                          ...slotProps,
                          spacer: {
                              children: footerActions,
                              sx: FOOTER_ACTIONS_SX
                          }
                      }
                    : slotProps
            }
            onPageChange={onPageChange}
            onRowsPerPageChange={onRowsPerPageChange}
            {...props}
        />
    )
}

export default TablePagination
