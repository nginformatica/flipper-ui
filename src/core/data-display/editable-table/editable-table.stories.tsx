import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import { EditableTable } from '.'

export default {
    title: 'DataDisplay/EditTable',
    component: EditableTable,
    args: {
        title: 'adicionar',
        onAddRow: (item: object) => Promise.resolve(alert(item)),
        onRowClick: () => window.alert('hello'),
        onDeleteRow: (item: object) => Promise.resolve(alert(item)),
        onUpdateRow: () => Promise.resolve(),
        onClickAdd: () => window.alert('hello')
    },
    argTypes: {
        'data-testid': {
            table: {
                disable: true
            }
        }
    }
} as Meta<typeof EditableTable>

const Template: StoryFn<typeof EditableTable> = args => (
    <EditableTable {...args} />
)

export const Default = Template.bind({})
Default.args = {
    paginationInfo: true,
    noRowsExpand: true,
    disableAddHeader: true,
    columns: [
        {
            title: 'Leitura',
            field: 'readAt',
            initialEditValue: new Date(),
            type: 'datetime',
            cellStyle: { textAlign: 'right' },
            headerStyle: { textAlign: 'right' }
        },
        {
            title: 'Posição',
            field: 'position',
            type: 'numeric'
        },
        {
            title: 'Origem',
            field: 'origin',
            editable: 'never',
            initialEditValue: 'Manual'
        }
    ],
    data: [
        {
            readAt: new Date('07/01/2019 17:21'),
            position: 7000,
            origin: (
                <div
                    style={{
                        maxWidth: '100px',
                        width: '80%',
                        backgroundColor: 'green',
                        borderRadius: 10,
                        textAlign: 'center'
                    }}>
                    80%
                </div>
            )
        },
        {
            readAt: new Date('06/15/2019 16:01'),
            position: 6740,
            origin: 'Manual'
        },
        {
            readAt: new Date('06/01/2019 19:22'),
            position: 6450,
            origin: 'S.O. 018774'
        },
        {
            readAt: new Date('05/15/2019 14:07'),
            position: 5600,
            origin: 'S.0. 018774'
        },
        {
            readAt: new Date('07/01/2019 19:22'),
            position: 6451,
            origin: 'S.O. 3'
        },
        {
            readAt: new Date('05/12/2019 14:07'),
            position: 8000,
            origin: 'S.0. 018771'
        }
    ]
}

export const WithAutocomplete = Template.bind({})
WithAutocomplete.args = {
    noHeader: true,
    autoCompleteField: 'listValues',
    columns: [
        {
            title: 'values',
            field: 'listValues',
            cellStyle: { textAlign: 'right' },
            headerStyle: { textAlign: 'right' }
        },
        {
            title: 'Posição',
            field: 'position',
            type: 'numeric'
        }
    ],
    data: [
        {
            listValues: 'some values',
            autoComplete: { value: '1', label: 'some values' },
            position: 7000
        },
        {
            listValues: 'any values',
            autoComplete: { value: '2', label: 'any values' },
            position: 6740
        }
    ]
}
