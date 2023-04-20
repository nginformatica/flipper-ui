import React from 'react'
import { Meta } from '@storybook/react'
import EditableTable from '.'

export default {
    title: 'EditTable',
    component: EditableTable
} as Meta<typeof EditableTable>

export const Default = () => (
    <EditableTable
        paginationInfo
        noRowsExpand
        disableAddHeader
        onAddRow={item => Promise.resolve(console.log(item))}
        onRowClick={() => window.alert('hello')}
        onDeleteRow={item => Promise.resolve(console.log(item))}
        title='adicionar'
        columns={[
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
        ]}
        data={[
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
        ]}
    />
)

export const WithAutocomplete = () => (
    <EditableTable
        noHeader
        title='adicionar'
        autoCompleteField='listValues'
        onUpdateRow={() => Promise.resolve()}
        onClickAdd={() => window.alert('hello')}
        columns={[
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
        ]}
        data={[
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
        ]}
    />
)
