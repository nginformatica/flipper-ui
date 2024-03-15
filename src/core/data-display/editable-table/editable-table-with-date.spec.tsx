import React from 'react'
import { act } from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event/'
import type { Column } from 'material-table'
import WithDate from '@/test/mocks/editable-table-date-mock'

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

describe('EditableTable - With Date', () => {
    it('should render', async () => {
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
                    data: DATA_WITH_DATE
                }}
            />
        )

        const editFirstRow = screen.getAllByTitle('Editar adicionar')[0]

        await act(async () => await userEvent.click(editFirstRow))

        const dateInput = screen.getByRole('date-picker') as HTMLInputElement

        expect(dateInput.value).toBe('01/07/2019 17:21')

        jest.clearAllMocks()
    })
})
