import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import type { ITableInteractive } from './TableInteractive'
import {
    InteractiveTableWrapper,
    TABLE_DATA
} from '@/test/mocks/table-interactive-mock'
import {
    getInitialColumns,
    getVisibleColumns,
    setVisibleColumns,
    STORAGE_KEY
} from './utils'
import '@testing-library/jest-dom'

describe('getInitialColumns', () => {
    const mockColumns = [
        { name: 'id', label: 'ID', show: true },
        { name: 'name', label: 'Name', show: true },
        { name: 'email', label: 'Email', show: false }
    ]

    beforeEach(() => {
        localStorage.clear()
        jest.clearAllMocks()
    })

    afterEach(() => {
        jest.restoreAllMocks()
    })

    it('should return default visible columns when localStorage is empty', () => {
        const result = getInitialColumns(mockColumns, 'key')

        expect(result).toEqual(['id', 'name'])
    })

    it('should return stored columns when valid data exists for the key', () => {
        const storedData = {
            table1: ['id', 'email'],
            table2: ['name']
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(storedData))

        const result = getInitialColumns(mockColumns, 'table1')

        expect(result).toEqual(['id', 'email'])
    })

    it('should return default columns when stored value for key is not an array', () => {
        const storedData = {
            table1: 'not-an-array'
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(storedData))

        const result = getInitialColumns(mockColumns, 'table1')

        expect(result).toEqual(['id', 'name'])
    })

    it('should return empty array when no columns are visible by default', () => {
        const columnsWithNoneVisible = [
            { name: 'id', label: 'ID', show: false },
            { name: 'name', label: 'Name', show: false }
        ]

        const result = getInitialColumns(columnsWithNoneVisible, 'key')

        expect(result).toEqual([])
    })
})

describe('setVisibleColumns', () => {
    beforeEach(() => {
        localStorage.clear()
        jest.clearAllMocks()
    })

    it('should save new columns when localStorage is empty', () => {
        const columns = ['id', 'name']
        const key = 'userTable'

        setVisibleColumns(columns, key)

        const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '')

        expect(storedData).toEqual({ [key]: columns })
    })

    it('should merge with existing data when saving new columns', () => {
        const initialData = {
            otherTable: ['email', 'phone']
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData))

        const newColumns = ['id', 'name']
        const key = 'userTable'

        setVisibleColumns(newColumns, key)

        const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '')

        expect(storedData).toEqual({
            ...initialData,
            [key]: newColumns
        })
    })

    it('should overwrite existing columns for the same key', () => {
        const initialData = {
            userTable: ['old', 'columns']
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData))

        const newColumns = ['id', 'name']
        const key = 'userTable'

        setVisibleColumns(newColumns, key)

        const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '')

        expect(storedData).toEqual({
            userTable: newColumns
        })
    })

    it('should handle empty columns array', () => {
        const columns: string[] = []
        const key = 'emptyTable'

        setVisibleColumns(columns, key)

        const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '')

        expect(storedData).toEqual({ [key]: columns })
    })
})

describe('getVisibleColumns', () => {
    const mockHeaders = [
        { name: 'id', label: 'ID' },
        { name: 'name', label: 'Name' },
        { name: 'email', label: 'Email' }
    ]

    it('should return all header names when visibleColumns is undefined', () => {
        const result = getVisibleColumns(mockHeaders, undefined)

        expect(result).toEqual(['id', 'name', 'email'])
    })

    it('should return the provided visibleColumns when defined', () => {
        const visibleColumns = ['id', 'email']
        const result = getVisibleColumns(mockHeaders, visibleColumns)

        expect(result).toEqual(visibleColumns)
    })
})

describe('Table Interactive', () => {
    const setVisibleColumnsMock = jest.fn()

    const renderComponent = (initialArgs?: Partial<ITableInteractive>) => {
        const user = userEvent.setup()

        const utils = render(
            <InteractiveTableWrapper
                initialArgs={initialArgs}
                setVisibleColumnsMock={setVisibleColumnsMock}
            />
        )

        return { user, ...utils }
    }

    beforeEach(() => {
        setVisibleColumnsMock.mockClear()
    })

    it('should render column after confirm', async () => {
        const { user } = renderComponent()

        const columnHeader = screen.queryByRole('columnheader', {
            name: /celular/i
        })

        expect(columnHeader).not.toBeInTheDocument()

        const settingsButton = screen
            .getByTestId('SettingsIcon')
            .closest('button') as HTMLButtonElement

        expect(settingsButton).toBeInTheDocument()

        await user.click(settingsButton)

        const preferencesDialog = await screen.findByRole('dialog', {
            name: /preferências/i
        })

        expect(preferencesDialog).toBeInTheDocument()

        const inputSwitch = screen.getByRole('checkbox', { name: /celular/i })

        expect(inputSwitch).not.toBeChecked()

        await user.click(inputSwitch)

        expect(inputSwitch).toBeChecked()

        const confirmBtn = screen.getByRole('button', { name: /confirmar/i })

        await user.click(confirmBtn)

        await waitFor(() => {
            expect(preferencesDialog).not.toBeInTheDocument()
        })

        const celularColumnHeader = await screen.findByRole('columnheader', {
            name: /celular/i
        })

        expect(celularColumnHeader).toBeInTheDocument()

        expect(screen.getByText('Celular1')).toBeInTheDocument()
        expect(screen.getByText('Celular2')).toBeInTheDocument()

        expect(setVisibleColumnsMock).toHaveBeenCalledWith(
            ['name', 'email', 'cel'],
            'infos'
        )
    })

    it('should call setRowsPerPage when row per page is changed', async () => {
        const mockSetRowsPerPage = jest.fn()
        const mockSetPage = jest.fn()

        const { user } = renderComponent({
            setRowsPerPage: mockSetRowsPerPage,
            setPage: mockSetPage,
            total: 20
        })

        const rowsPerPageSelect = screen.getByLabelText(/linhas por página/i)

        expect(rowsPerPageSelect).toBeInTheDocument()

        await user.click(rowsPerPageSelect)

        const option = await screen.findByRole('option', { name: '50' })

        await user.click(option)

        expect(mockSetRowsPerPage).toHaveBeenCalledWith(50)
        expect(mockSetPage).toHaveBeenCalledWith(0)

        const nextPageButton = screen.getByRole('button', {
            name: /next page/i
        })

        await user.click(nextPageButton)

        expect(mockSetPage).toHaveBeenCalledWith(1)
    })

    it('should render empty fallback array when visibleColumns is undefined', () => {
        renderComponent({
            headers: [{ name: 'id', label: 'ID', show: true }],
            visibleColumns: undefined,
            valuesInvoices: TABLE_DATA
        })

        expect(screen.queryByText('ID')).not.toBeInTheDocument()
    })

    it('should render fallback value (10) when rowsPerPage is undefined', async () => {
        renderComponent({
            rowsPerPage: undefined
        })

        const selectElement = screen.getByLabelText(/linhas por página/i)

        expect(selectElement).toBeInTheDocument()

        const inputElement = screen.getByDisplayValue('10')

        expect(inputElement).toBeInTheDocument()
    })

    it('should render fallback value (0) when page is undefined', () => {
        renderComponent({
            total: undefined,
            rowsPerPage: undefined,
            page: undefined
        })

        expect(screen.getByText('0-0 de 0')).toBeInTheDocument()
    })
})
