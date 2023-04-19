import * as React from 'react'
import { render } from '@testing-library/react'
import Table from '.'
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableRow from './TableRow'
import TableCell from './TableCell'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

interface IProps {
    onSort?: (name: string) => void
    color?: 'primary' | 'secondary' | 'default' | 'inherit'
}

const Default = ({ onSort, color }: IProps) => {
    return (
        <Table>
            <TableHead color={color} onSort={onSort ? onSort : undefined}>
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

    it('should render with custom color', async () => {
        const { container } = render(<Default color='secondary' />)

        const header = container.querySelector(
            '.MuiTableHead-root'
        ) as HTMLTableCellElement

        const findSecondaryClass = Array.from(header.classList)
            .join(' ')
            .indexOf('TableHead-secondary')

        expect(findSecondaryClass).toBeGreaterThan(-1)
    })
})
