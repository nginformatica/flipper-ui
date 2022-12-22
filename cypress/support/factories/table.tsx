import React from 'react'
import { mount } from 'cypress/react'
import { Table, TableCell, TableHead, TableRow } from '../../../src'
import { generateMock } from '../component'

export const TableFactory = () => {
    generateMock({ value: 'table-params', type: 'TableParams' }).then(
        mockedList => {
            mount(
                <Table data-cy='table-container'>
                    <>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                            </TableRow>
                        </TableHead>
                        {mockedList}
                    </>
                </Table>
            )
        }
    )
}
