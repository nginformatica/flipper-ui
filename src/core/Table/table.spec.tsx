import * as React from 'react'
import { render } from '@testing-library/react'
import Table from '.'
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableRow from './TableRow'
import TableCell from './TableCell'

const Default = () => (
    <Table>
        <TableHead>
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
        </TableBody>
    </Table>
)

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
})
