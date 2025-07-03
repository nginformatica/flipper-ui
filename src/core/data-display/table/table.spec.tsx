import React, { act, useState } from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import TableBody from './table-body'
import TableCell from './table-cell'
import TableFooter from './table-footer'
import TableHead from './table-head'
import TablePagination from './table-pagination'
import TableRow from './table-row'
import Table from '.'
import '@testing-library/jest-dom'

interface IProps {
    onSort?: (name: string) => void
    color?: string
}

const Default = ({ onSort, color }: IProps) => {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(2)

    return (
        <Table>
            <TableHead color={color} onSort={onSort}>
                <TableRow>
                    <TableCell>Table-Head-Name</TableCell>
                    <TableCell>Table-Head-Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Table-Row-Name-1</TableCell>
                    <TableCell>Table-Row-Name-Email-1</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Table-Row-Name-2</TableCell>
                    <TableCell>Table-Row-Name-Email-2</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Table-Row-Name-3</TableCell>
                    <TableCell>Table-Row-Name-Email-3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Table-Row-Name-4</TableCell>
                    <TableCell>Table-Row-Name-Email-4</TableCell>
                </TableRow>
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TablePagination
                        page={page}
                        rowsPerPage={rowsPerPage}
                        count={4}
                        rowsPerPageOptions={[1, 2, 4]}
                        onPageChange={(_, page: number) => {
                            setPage(page)
                        }}
                        onRowsPerPageChange={event => {
                            setRowsPerPage(parseInt(event.target.value, 10))
                            setPage(0)
                        }}
                    />
                </TableRow>
            </TableFooter>
        </Table>
    )
}

describe('Table', () => {
    it('should render', () => {
        const { findAllByText } = render(<Default />)

        const tableHeadName = findAllByText('Table-Head-Name')
        const tableHeadEmail = findAllByText('Table-Head-Email')
        const tableRowName1 = findAllByText('Table-Row-Name-1')
        const tableRowEmail1 = findAllByText('Table-Row-Name-Email-1')
        const tableRowName2 = findAllByText('Table-Row-Name-2')
        const tableRowEmail2 = findAllByText('Table-Row-Name-Email-2')

        expect(tableHeadName).toBeDefined()
        expect(tableHeadEmail).toBeDefined()
        expect(tableRowName1).toBeDefined()
        expect(tableRowEmail1).toBeDefined()
        expect(tableRowName2).toBeDefined()
        expect(tableRowEmail2).toBeDefined()
    })

    it('should render with sort', async () => {
        const onSortSpy = jest.fn()

        const { getByText } = render(<Default onSort={onSortSpy} />)

        const tableHeadName = getByText('Table-Head-Name')

        const sortButton = tableHeadName.querySelector('svg')

        await act(
            async () => await userEvent.click(sortButton || tableHeadName)
        )

        expect(onSortSpy).toHaveBeenCalled()
    })

    it('should render with custom color', () => {
        const { container } = render(<Default color='blue' />)

        const header = container.querySelector(
            '.MuiTableHead-root'
        ) as HTMLTableCellElement

        waitFor(() => {
            expect(header).toBeInTheDocument()
        })

        const headerStyle = getComputedStyle(header)

        waitFor(() => {
            expect(headerStyle.backgroundColor).toBe('blue')
        })
    })

    it('should render footer', () => {
        const { container } = render(<Default color='blue' />)

        const footer = container.querySelector(
            '.MuiTableFooter-root'
        ) as HTMLTableCellElement

        waitFor(() => {
            expect(footer).toBeInTheDocument()
        })
    })

    it('should change page when next page button is clicked', () => {
        const { getByText, getByLabelText } = render(<Default />)

        const pageDisplay = getByText('1-2 de 4')

        expect(pageDisplay).toBeInTheDocument()

        const nextPageButton = getByLabelText('Go to next page')

        fireEvent.click(nextPageButton)

        expect(getByText('3-4 de 4')).toBeInTheDocument()
    })

    it('should change rows per page', () => {
        const { getByRole, getAllByRole } = render(<Default />)

        const combobox = getByRole('combobox')

        fireEvent.mouseDown(combobox)

        const option = getByRole('option', { name: '4' })

        fireEvent.click(option)

        expect(combobox).toHaveTextContent('4')

        const rowsAfter = getAllByRole('rowgroup')[1].childElementCount

        expect(rowsAfter).toBe(4)
    })
})
