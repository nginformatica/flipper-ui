import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { DataTableField } from './data-table-field'
import '@testing-library/jest-dom'

const dataInput = [
    {
        branch: 'Keepfy Joinville',
        local: 'Joiville',
        status: 'Ativo',
        companyCode: '',
        branchCode: ''
    },
    {
        branch: 'Keepfy São Paulo',
        local: 'São Paulo',
        status: 'Ativo',
        companyCode: '',
        branchCode: ''
    },
    {
        branch: 'Keepfy Rio Grande do Sul',
        local: 'Rio Grande do Sul',
        status: 'Ativo',
        companyCode: '',
        branchCode: ''
    },
    {
        branch: 'Keepfy Rio de Janeiro',
        local: 'Rio de Janeiro',
        status: 'Ativo',
        companyCode: '',
        branchCode: ''
    }
]

const tableHead = [
    {
        title: 'Nome da Filial',
        field: 'branch',
        type: 'text',
        editable: false
    },
    {
        title: 'Localidade',
        field: 'local',
        type: 'text',
        editable: false
    },
    {
        title: 'Status',
        field: 'status',
        type: 'text',
        editable: false
    },
    {
        title: 'Código da Empresa',
        field: 'companyCode',
        type: 'number',
        editable: true
    },
    {
        title: 'Código da Filial',
        field: 'branchCode',
        type: 'text',
        editable: true
    }
]

describe('DataTableField', () => {
    it('should render', () => {
        render(
            <DataTableField
                checkbox
                header={[]}
                rows={[]}
                setRows={jest.fn()}
                checkboxProps={{
                    checkRow: [false, false],
                    checkAllRows: false,
                    setSelectedRow: jest.fn(),
                    setSelectedAllRows: jest.fn()
                }}
            />
        )

        const container = screen.getByTestId('data-table-field')

        expect(container).toBeDefined()
    })

    it('should render with all the rows', () => {
        render(
            <DataTableField
                checkbox
                header={tableHead}
                rows={dataInput}
                setRows={jest.fn()}
                checkboxProps={{
                    checkRow: [false, false],
                    checkAllRows: false,
                    setSelectedRow: jest.fn(),
                    setSelectedAllRows: jest.fn()
                }}
            />
        )

        const rows = screen.getAllByRole('rowgroup')[1].childElementCount

        expect(rows).toBe(4)
    })

    it('should render header and rows content', () => {
        const { findAllByText } = render(
            <DataTableField
                checkbox
                header={tableHead}
                rows={dataInput}
                setRows={jest.fn()}
                checkboxProps={{
                    checkRow: [false, false],
                    checkAllRows: false,
                    setSelectedRow: jest.fn(),
                    setSelectedAllRows: jest.fn()
                }}
            />
        )

        const tableRowValue = findAllByText('Keepfy Joinville')
        const tableHeadValue = findAllByText('Nome da Filial')

        expect(tableRowValue).toBeDefined()
        expect(tableHeadValue).toBeDefined()
    })

    it('should check the checkbox when clicked', () => {
        render(
            <DataTableField
                checkbox
                header={tableHead}
                rows={dataInput}
                setRows={jest.fn()}
                checkboxProps={{
                    checkRow: [false, false],
                    checkAllRows: false,
                    setSelectedRow: jest.fn(),
                    setSelectedAllRows: jest.fn()
                }}
            />
        )

        const checkbox = screen.getAllByRole('checkbox')[0]

        expect(checkbox).not.toBeChecked()

        fireEvent.click(checkbox)

        waitFor(() => {
            expect(checkbox).toBeChecked()
        })
    })

    it('should render text field when checkRow is true', () => {
        render(
            <DataTableField
                checkbox
                header={tableHead}
                rows={dataInput}
                setRows={jest.fn()}
                checkboxProps={{
                    checkRow: [true, false],
                    checkAllRows: false,
                    setSelectedRow: jest.fn(),
                    setSelectedAllRows: jest.fn()
                }}
            />
        )

        const textField = screen.getByRole('textbox')

        waitFor(() => {
            expect(textField).toBeInTheDocument()
        })
    })
})
