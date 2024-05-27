import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import TableBody from './table-body'
import TableCell from './table-cell'
import TableHead from './table-head'
import TableRow from './table-row'
import Table from '.'

export default {
    title: 'DataDisplay/Table',
    component: Table
} as Meta<typeof Table>

const Template: StoryFn<typeof Table> = args => <Table {...args} />

export const Default = Template.bind({})
Default.args = {
    children: (
        <>
            <TableHead>
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
        </>
    )
}
