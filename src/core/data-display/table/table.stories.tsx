import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import TableBody from './table-body'
import TableCell from './table-cell'
import TableHead from './table-head'
import TableRow from './table-row'
import Table from '.'

const meta: Meta<typeof Table> = {
    title: 'DataDisplay/Table',
    component: Table,
    argTypes: {
        spacing: {
            options: ['normal', 'checkbox', 'none'],
            control: { type: 'radio' },
            description:
                'The table spacing. ' +
                'Must be `"normal" | "checkbox" | "none"`' +
                'If not set, the default is "normal"'
        },
        children: {
            control: false,
            description: 'The table children'
        },
        margin: {
            control: 'text',
            description: 'The table margin'
        },
        padding: {
            control: 'text',
            description: 'The table padding'
        },
        style: {
            control: 'object',
            description: 'The table style'
        }
    }
}

export default meta

type Story = StoryObj<typeof Table>

export const table: Story = {
    render: ({ ...args }) => {
        return (
            <Table {...args}>
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
            </Table>
        )
    },
    args: {
        spacing: 'normal',
        margin: '0px',
        padding: '0px',
        style: { color: '#000000' }
    }
}
