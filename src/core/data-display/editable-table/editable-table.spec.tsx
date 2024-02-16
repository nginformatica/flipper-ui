import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { fireEvent, render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event/'
import type { Column } from 'material-table'
import WithDate from '@/test/mocks/editable-table-date-mock'
import EditableTable from '@/test/mocks/editable-table-mock'

const COLUMNS: Column<object>[] = [
    {
        title: 'Name',
        field: 'name',
        type: 'string'
    },
    {
        title: 'Value',
        field: 'value',
        type: 'numeric'
    }
]

const COLUMNS_WITH_DATE: Column<object>[] = [
    {
        title: 'Data',
        field: 'date',
        initialEditValue: new Date(),
        type: 'datetime'
    },
    {
        title: 'Posição',
        field: 'position',
        type: 'numeric'
    }
]

const DATA = [
    {
        name: 'Fulano',
        value: 1
    },
    {
        name: 'Ciclano',
        value: 2
    },
    {
        name: 'Beltrano',
        value: 3
    },
    {
        name: 'Outro',
        value: 4
    },
    {
        name: 'Mais um',
        value: 5
    },
    {
        name: 'E mais um',
        value: 6
    }
]

const DATA_WITH_DATE = [
    {
        date: new Date('07/01/2019 17:21'),
        position: 7000
    },
    {
        date: new Date('06/15/2019 16:01'),
        position: 6740
    },
    {
        date: new Date('06/01/2019 19:22'),
        position: 6450
    },
    {
        date: new Date('05/15/2019 14:07'),
        position: 5600
    },
    {
        date: new Date('07/01/2019 19:22'),
        position: 6451
    },
    {
        date: new Date('05/12/2019 14:07'),
        position: 8000
    }
]

const AUTO_COMPLETE_SUGGESTIONS = [
    { label: 'other values', value: '123456' },
    { label: 'only values', value: '10000' },
    { label: 'some values', value: '5000' },
    { label: 'any values', value: '12' }
]

beforeEach(() => {
    // prevent <div> cannot appear as a child of <tr> warning on console
    const spy = jest.spyOn(console, 'error')

    spy.mockImplementation(jest.fn())
})

afterEach(() => {
    jest.restoreAllMocks()
    jest.clearAllMocks()
})

describe('EditableTable', () => {
    it('should render', () => {
        render(
            <EditableTable
                tableProps={{
                    paginationInfo: true,
                    noRowsExpand: true,
                    disableAddHeader: true,
                    onAddRow: jest.fn(),
                    onRowClick: jest.fn(),
                    title: 'adicionar',
                    columns: COLUMNS,
                    data: DATA
                }}
            />
        )

        const label = screen.getByText('Fulano')

        expect(label).toBeDefined()
    })

    it('should render with no data', () => {
        render(
            <EditableTable
                tableProps={{
                    paginationInfo: true,
                    disableAddHeader: true,
                    onAddRow: jest.fn(),
                    onRowClick: jest.fn(),
                    title: 'adicionar'
                }}
            />
        )

        const label = screen.getByText(
            'Não há dados para serem exibidos no momento'
        )

        expect(label).toBeDefined()
    })

    it('should render with no data or columns', () => {
        render(
            <EditableTable
                tableProps={{
                    paginationInfo: true,
                    disableAddHeader: true,
                    onAddRow: jest.fn(),
                    onRowClick: jest.fn(),
                    title: 'adicionar'
                }}
            />
        )

        const label = screen.getByText(
            'Não há dados para serem exibidos no momento'
        )

        expect(label).toBeDefined()
    })

    it('should render with no autoCompleteSuggestions and update row', async () => {
        const onUpdateSpy = jest
            .fn()
            .mockImplementation(() => Promise.resolve())

        const { getAllByTitle } = render(
            <EditableTable
                tableProps={{
                    autoCompleteField: 'name',
                    disableAddHeader: true,
                    paginationInfo: false,
                    noRowsExpand: true,
                    onAddRow: jest.fn(),
                    onUpdateRow: onUpdateSpy,
                    onRowClick: jest.fn(),
                    title: 'adicionar',
                    columns: COLUMNS,
                    data: DATA
                }}
            />
        )

        const editFirstRow = getAllByTitle('Editar adicionar')[0]

        await act(async () => await userEvent.click(editFirstRow))

        const inputValueContainer = screen.getAllByTestId('text-field')[0]
        const inputNameContainer = screen.getAllByTestId('mui-input')[0]

        const inputName = inputNameContainer.firstElementChild
            ?.firstElementChild as HTMLInputElement
        const inputValue =
            inputValueContainer.firstElementChild as HTMLInputElement

        await act(async () => {
            await userEvent.clear(inputName)
            await userEvent.type(inputName, 'other')

            await userEvent.clear(inputValue)
            await userEvent.type(inputValue, '2')
        })

        const saveBtn = screen.getByTitle('Salvar')

        await act(async () => await userEvent.click(saveBtn))

        expect(onUpdateSpy).toHaveBeenCalledWith(
            { name: 'other', value: '2' },
            {
                name: 'Fulano',
                tableData: { editing: undefined, id: 0 },
                value: 1
            }
        )
    })

    it('should add row on add click', async () => {
        render(
            <EditableTable
                tableProps={{
                    paginationInfo: true,
                    noRowsExpand: true,
                    onAddRow: jest.fn(),
                    onRowClick: jest.fn(),
                    onClickAdd: jest.fn(),
                    onDeleteRow: jest.fn(),
                    onUpdateRow: jest.fn(),
                    title: 'item',
                    columns: COLUMNS,
                    data: DATA
                }}
            />
        )

        const label = screen.getByText('Adicionar item')

        await userEvent.click(label)
        const nameInput = screen.getByRole('name-input').firstElementChild
            ?.firstElementChild as HTMLInputElement
        const valueInput = screen.getByRole('name-input').firstElementChild
            ?.firstElementChild as HTMLInputElement

        expect(nameInput.value).toBe('')
        expect(valueInput.value).toBe('')
    })

    it('should render with no header', () => {
        render(
            <EditableTable
                tableProps={{
                    paginationInfo: true,
                    noRowsExpand: true,
                    noHeader: true,
                    disableAddHeader: true,
                    onAddRow: jest.fn(),
                    onRowClick: jest.fn(),
                    title: 'item',
                    columns: COLUMNS,
                    data: DATA
                }}
            />
        )

        const label = screen.queryByText('Adicionar item')

        expect(label).toBeNull()
    })

    it('should render without pagination info', async () => {
        render(
            <EditableTable
                tableProps={{
                    paginationInfo: false,
                    noRowsExpand: true,
                    disableAddHeader: true,
                    onAddRow: jest.fn(),
                    onRowClick: jest.fn(),
                    title: 'adicionar',
                    columns: COLUMNS,
                    data: DATA
                }}
            />
        )

        const nextPageBtn = screen.queryByTestId('next-page')

        expect(nextPageBtn).toBeNull()
    })

    it('should paginate', async () => {
        render(
            <EditableTable
                tableProps={{
                    paginationInfo: true,
                    noRowsExpand: true,
                    disableAddHeader: true,
                    onAddRow: jest.fn(),
                    onRowClick: jest.fn(),
                    title: 'adicionar',
                    columns: COLUMNS,
                    data: DATA
                }}
            />
        )

        const nextPageBtn = screen.getByTestId('next-page')

        await act(async () => await userEvent.click(nextPageBtn))

        const label = screen.getByText('E mais um')

        expect(label).toBeDefined()
    })

    it('should render with no pagination info', () => {
        render(
            <EditableTable
                tableProps={{
                    paginationInfo: false,
                    noRowsExpand: true,
                    disableAddHeader: true,
                    onAddRow: jest.fn(),
                    onRowClick: jest.fn(),
                    title: 'adicionar',
                    columns: COLUMNS,
                    data: DATA
                }}
            />
        )

        const label = screen.getByText('Fulano')

        expect(label).toBeDefined()
    })

    it('should call update row with correct values', async () => {
        const onUpdateSpy = jest
            .fn()
            .mockImplementation(() => Promise.resolve())

        const { getByTitle, getAllByTitle, getAllByTestId } = render(
            <EditableTable
                tableProps={{
                    autoCompleteSuggestions: AUTO_COMPLETE_SUGGESTIONS,
                    autoCompleteField: 'name',
                    disableAddHeader: true,
                    paginationInfo: false,
                    noRowsExpand: true,
                    onAddRow: jest.fn(),
                    onUpdateRow: onUpdateSpy,
                    onRowClick: jest.fn(),
                    title: 'adicionar',
                    columns: COLUMNS,
                    data: DATA
                }}
            />
        )

        const editFirstRow = getAllByTitle('Editar adicionar')[0]

        await act(async () => await userEvent.click(editFirstRow))

        const inputName = getAllByTestId('text-field')[0]
            .firstElementChild as HTMLInputElement

        const inputValue = getAllByTestId('text-field')[1]
            .firstElementChild as HTMLInputElement

        await act(async () => {
            await userEvent.clear(inputName)
            await userEvent.type(inputName, 'other')

            await userEvent.clear(inputValue)
            await userEvent.type(inputValue, '2')
        })

        const saveBtn = getByTitle('Salvar')

        await act(async () => await userEvent.click(saveBtn))

        expect(onUpdateSpy).toHaveBeenCalledWith(
            { name: 'other', value: '2' },
            {
                name: 'Fulano',
                tableData: { editing: undefined, id: 0 },
                value: 1
            }
        )
    })

    it('should call delete row with correct values', async () => {
        const onDeleteSpy = jest
            .fn()
            .mockImplementation(() => Promise.resolve())

        const { getByTitle, getAllByTitle } = render(
            <EditableTable
                tableProps={{
                    paginationInfo: true,
                    noRowsExpand: true,
                    disableAddHeader: true,
                    title: 'adicionar',
                    columns: COLUMNS,
                    data: DATA,
                    onDeleteRow: onDeleteSpy,
                    onAddRow: jest.fn(),
                    onUpdateRow: jest.fn(),
                    onRowClick: jest.fn()
                }}
            />
        )

        const deleteRowBtn = getAllByTitle('Remover adicionar')[0]

        await act(async () => await userEvent.click(deleteRowBtn))

        const confirmBtn = getByTitle('Salvar')

        await act(async () => await userEvent.click(confirmBtn))

        expect(onDeleteSpy).toHaveBeenCalledWith({
            name: 'Fulano',
            tableData: { editing: undefined, id: 0 },
            value: 1
        })
    })

    it('should call onClickAdd', async () => {
        const onClickAddSpy = jest
            .fn()
            .mockImplementation(() => Promise.resolve())

        const { getAllByTitle } = render(
            <EditableTable
                tableProps={{
                    autoCompleteSuggestions: AUTO_COMPLETE_SUGGESTIONS,
                    autoCompleteField: 'name',
                    disableAddHeader: true,
                    paginationInfo: false,
                    noRowsExpand: true,
                    onAddRow: jest.fn(),
                    onUpdateRow: jest.fn(),
                    onRowClick: jest.fn(),
                    onClickAdd: onClickAddSpy,
                    title: 'adicionar',
                    columns: COLUMNS,
                    data: DATA
                }}
            />
        )

        const editFirstRow = getAllByTitle('Editar adicionar')[0]

        await act(async () => await userEvent.click(editFirstRow))

        const inputContainer = screen.getAllByTestId('text-field')[0]

        const input = inputContainer.firstElementChild as HTMLInputElement

        fireEvent.focusIn(input)

        const addBtn = screen.getByText('Adicionar')

        await act(async () => await userEvent.click(addBtn))

        expect(onClickAddSpy).toHaveBeenCalled()
    })

    it('should render with no autoCompleteSuggestions no add button', async () => {
        const onClickAddSpy = jest
            .fn()
            .mockImplementation(() => Promise.resolve())

        const { getAllByTitle } = render(
            <EditableTable
                tableProps={{
                    autoCompleteField: 'name',
                    disableAddHeader: true,
                    paginationInfo: false,
                    noRowsExpand: true,
                    onAddRow: jest.fn(),
                    onUpdateRow: jest.fn(),
                    onRowClick: jest.fn(),
                    onClickAdd: onClickAddSpy,
                    title: 'adicionar',
                    columns: COLUMNS,
                    data: DATA
                }}
            />
        )

        const editFirstRow = getAllByTitle('Editar adicionar')[0]

        await act(async () => await userEvent.click(editFirstRow))

        const inputContainer = screen.getAllByTestId('text-field')[0]

        const input = inputContainer.firstElementChild as HTMLInputElement

        fireEvent.focusIn(input)

        const addBtn = screen.queryByText('Adicionar')

        expect(addBtn).toBeNull()
    })

    it('should render with error', async () => {
        render(
            <WithDate
                tableProps={{
                    autoCompleteSuggestions: AUTO_COMPLETE_SUGGESTIONS,
                    autoCompleteField: 'name',
                    disableAddHeader: true,
                    paginationInfo: false,
                    noRowsExpand: true,
                    onAddRow: jest.fn(),
                    onUpdateRow: jest.fn(),
                    onRowClick: jest.fn(),
                    title: 'adicionar',
                    columns: COLUMNS_WITH_DATE,
                    data: DATA_WITH_DATE,
                    errors: ['date', 'position']
                }}
            />
        )

        const editFirstRow = screen.getAllByTitle('Editar adicionar')[0]

        await act(async () => await userEvent.click(editFirstRow))

        const dateInput = screen.getByRole('date-picker') as HTMLInputElement

        expect(dateInput.value).toBe('01/07/2019 17:21')
        const textInput = screen.getAllByTestId('text-field')[0]

        expect(dateInput.parentElement?.classList).toContain('Mui-error')
        expect(textInput.classList).toContain('Mui-error')
    })
})
