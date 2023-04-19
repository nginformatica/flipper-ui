import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Table from '.'
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableRow from './TableRow'
import TableCell from './TableCell'

export default {
    title: 'Table',
    component: Table
} as ComponentMeta<typeof Table>

export const Default = () => (
    <Table>
        <TableHead color='default'>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>Name 1</TableCell>
                <TableCell>Email 1</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Name 2</TableCell>
                <TableCell>Email 2</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Name 3</TableCell>
                <TableCell>Email 3</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Name 4</TableCell>
                <TableCell>Email 4</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Name 5</TableCell>
                <TableCell>Email 5</TableCell>
            </TableRow>
        </TableBody>
    </Table>
)
