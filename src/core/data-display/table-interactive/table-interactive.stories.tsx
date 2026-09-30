import React, { useState } from 'react'
import { Button } from '@mui/material'
import type { ITableInteractive } from '../table-interactive/TableInteractive'
import type { Meta, StoryObj } from '@storybook/react'
import TextField from '@/core/inputs/text-field'
import TableCell from '../table/table-cell'
import TableRow from '../table/table-row'
import { TableInteractive } from '../table-interactive/TableInteractive'
import {
    getInitialColumns,
    getOrderedVisibleColumns,
    setVisibleColumns
} from './utils'

const COMPONENT_DESCRIPTION = [
    'A table whose **body belongs to you**. The component renders the',
    'header, the footer and the column preferences dialog; the rows come',
    'from the `rowsContent` render prop:',
    '',
    '```tsx',
    'const renderRows = () =>',
    '    items.map(item => (',
    '        <TableRow key={item.id}>',
    '            {orderedVisibleColumns.map(column => (',
    '                <TableCell key={column}>{item[column]}</TableCell>',
    '            ))}',
    '        </TableRow>',
    '    ))',
    '',
    '<TableInteractive name="products" headers={HEADERS} rowsContent={renderRows} />',
    '```',
    '',
    'That split is the thing to keep in mind: anything about a body cell —',
    'padding, truncation, click handling — is written by you, not',
    'configured here. For clipping there is a helper, so the ellipsis rule',
    'is not copied into every product:',
    '',
    '```tsx',
    "import { truncateStyle } from 'flipper-ui/core/data-display/table-interactive'",
    '',
    '<TableCell style={truncateStyle(header.width)}>{value}</TableCell>',
    '```',
    '',
    'It is opt-in per cell: `truncateStyle()` returns nothing, so a column',
    'that must not hide content just does not call it. `true` clips at',
    '150px, a number is read as pixels, a string is used as given.',
    '',
    '> The ellipsis is reliable; the width is a ceiling, not a promise.',
    "> Under the browser's default `table-layout: auto` the column can",
    '> still render wider than asked when there is room to spare.',
    '',
    '### Column preferences',
    '',
    'Each header carries `show`, and the user can toggle columns in a',
    'dialog. The choice is persisted in `localStorage` under',
    '`visible-columns`, keyed by the `name` prop — so `name` is not just a',
    'label, it is the storage key. The helpers do the wiring:',
    '',
    '```tsx',
    "const [columns, setColumns] = useState(getInitialColumns(HEADERS, 'products'))",
    '',
    'const ordered = getOrderedVisibleColumns(HEADERS, columns)',
    '',
    "setVisibleColumns(columns, 'products')",
    '```',
    '',
    '`getInitialColumns` reads the stored choice and falls back to `show`;',
    '`getOrderedVisibleColumns` keeps your rows in the header order.',
    '',
    '### Pagination',
    '',
    'Controlled. `page` and `rowsPerPage` are yours, and the component',
    'calls `setPage` and `setRowsPerPage` — it never slices the data.',
    '',
    '> Layout is opt-in. Without `stickyHeader`, `maxHeight`, `cellPadding`,',
    '> `framed` or `borderRadius` the table renders exactly as it always',
    '> did.'
].join('\n')

const meta: Meta<typeof TableInteractive> = {
    title: 'DataDisplay/Table Interactive',
    component: TableInteractive,
    parameters: {
        docs: {
            description: {
                component: COMPONENT_DESCRIPTION
            }
        }
    },
    argTypes: {
        name: {
            control: 'text',
            description:
                'Identifies the table. Also the key the column ' +
                'preferences are stored under in `localStorage`'
        },
        headers: {
            control: false,
            description:
                'Declares the columns: `name` to match the data, `label` ' +
                'for the header, `show` for the default visibility, plus ' +
                'optional `width` and `sortable`'
        },
        rowsContent: {
            control: false,
            description:
                'Render prop returning the body rows. The component does ' +
                'not render body cells, so their markup and styling are ' +
                'yours'
        },
        children: {
            control: false,
            description:
                'Render prop for a trailing cell on every row, normally ' +
                'the row actions. Its presence adds the matching empty ' +
                'header cell'
        },
        visibleColumns: {
            control: false,
            description:
                'Columns currently shown. Feed it from `getInitialColumns` ' +
                'and keep it in state'
        },
        columnsTemporary: {
            control: false,
            description:
                'The selection being edited inside the dialog, before ' +
                'the user confirms it'
        },
        setColumnsTemporary: {
            control: false,
            description: 'Setter the dialog uses while the user picks columns'
        },
        open: {
            control: 'boolean',
            description: 'Whether the column preferences dialog is open'
        },
        handleOpen: {
            control: false,
            description: 'Opens the column preferences dialog'
        },
        onConfirm: {
            control: false,
            description:
                'Called when the user confirms the dialog. Persist with ' +
                '`setVisibleColumns` here'
        },
        onCancel: {
            control: false,
            description:
                'Called when the user dismisses the dialog. Roll the ' +
                'temporary selection back here'
        },
        isInteractive: {
            control: 'boolean',
            description:
                'Shows the toolbar above the table, with the settings ' +
                'button and any `headerActions`'
        },
        headerActions: {
            control: false,
            description:
                'Extra elements rendered in the toolbar next to the ' +
                'settings button, such as filters or a search field'
        },
        isCollapsible: {
            control: 'boolean',
            description:
                'Reserves the trailing header cell for a collapse ' +
                'control, the same slot `children` uses'
        },
        fixed: {
            control: 'boolean',
            description:
                'Applies each header `width` as a `max-width` and ' +
                'truncates the label with an ellipsis. Header cells only — ' +
                'body cells come from `rowsContent`'
        },
        page: {
            control: 'number',
            description: 'Current page. Controlled — the table never sets it'
        },
        rowsPerPage: {
            control: 'number',
            description: 'Rows per page. Controlled'
        },
        rowsPerPageOptions: {
            control: false,
            description: 'Choices in the rows per page select'
        },
        total: {
            control: 'number',
            description:
                'Total number of rows, used by the footer to count pages'
        },
        paginated: {
            control: 'boolean',
            description: 'Renders the pagination footer'
        },
        setPage: {
            control: false,
            description: 'Called when the user changes page'
        },
        setRowsPerPage: {
            control: false,
            description: 'Called when the user changes the page size'
        },
        active: {
            control: 'text',
            description: 'Name of the column currently sorted'
        },
        direction: {
            control: 'radio',
            options: ['asc', 'desc'],
            description: 'Sorting direction of the active column'
        },
        onSort: {
            control: false,
            description:
                'Called with the column name when a sortable header is ' +
                'clicked. Sorting the data is up to you'
        },
        valuesInvoices: {
            control: false,
            description:
                'Legacy source for the page count, used when `total` is ' +
                'absent. Prefer `total`'
        },
        size: {
            control: 'radio',
            options: ['small', 'medium'],
            description:
                'Row density. Reaches the body cells too, through the ' +
                'MUI table context, and shrinks the pagination footer ' +
                'along with them — toolbar height, labels, select and ' +
                'page buttons'
        },
        stickyHeader: {
            control: 'boolean',
            description:
                'Keeps the header visible while the body scrolls. ' +
                'Needs maxHeight to have something to scroll within.'
        },
        headerMargin: {
            control: 'text',
            description:
                'Margin of the header row that carries headerActions and ' +
                'the preferences button. Defaults to `0 0 8px 0`'
        },
        stickyFooter: {
            control: 'boolean',
            description:
                'Keeps the pagination visible while the body scrolls. ' +
                'Needs maxHeight to have something to scroll within, and ' +
                'paginated to have a footer at all.'
        },
        maxHeight: {
            control: 'text',
            description:
                'Bounds the scroll wrapper height and lets the body ' +
                'scroll. Also thins the scrollbar.'
        },
        cellPadding: {
            control: 'text',
            description:
                'Padding applied to the header cells. ' +
                'Body cells come from rowsContent, so their padding is yours.'
        },
        framed: {
            control: 'boolean',
            description:
                'Moves the border from the table to a rounded frame and ' +
                'drops the last row border.'
        },
        borderRadius: {
            control: 'text',
            description:
                'Frame corner radius. ' +
                'A bare number is read as pixels. Defaults to 12 when framed.'
        }
    }
}

export default meta

type Story = StoryObj<typeof TableInteractive>

const HEADERS = [
    { name: 'name', label: 'Nome', width: '300px', show: true, sortable: true },
    { name: 'email', label: 'E-mail', show: true, sortable: false },
    { name: 'cel', label: 'Celular', show: false, sortable: false }
]

const TABLE_DATA = [
    { name: 'Name 1', email: 'Email 1', cel: 'Celular1' },
    { name: 'Name 2', email: 'Email 2', cel: 'Celular2' },
    { name: 'Name 3', email: 'Email 3', cel: 'Celular3' },
    { name: 'Name 4', email: 'Email 4', cel: 'Celular4' },
    { name: 'Name 5', email: 'Email 5', cel: 'Celular5' }
]

const InteractiveTable = (args: ITableInteractive) => {
    const [open, setOpen] = useState<boolean>(false)
    const [columns, setColumns] = useState<string[]>(
        getInitialColumns(HEADERS, 'infos')
    )
    const [columnsTemporary, setColumnsTemporary] = useState<string[]>(columns)

    const orderedVisibleColumns = getOrderedVisibleColumns(HEADERS, columns)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleCancel = () => {
        setOpen(false)

        setColumnsTemporary(columns)
    }

    const handleConfirmColumns = () => {
        setColumns(columnsTemporary)
        setVisibleColumns(columnsTemporary, 'infos')

        setOpen(false)
    }

    const handleContent = () => {
        return TABLE_DATA.map((row, i) => (
            <TableRow key={i}>
                {orderedVisibleColumns.map((col, j) => (
                    <TableCell key={j}>
                        {row[col as keyof typeof row]}
                    </TableCell>
                ))}
            </TableRow>
        ))
    }

    return (
        <>
            <TableInteractive
                {...args}
                fixed
                open={open}
                active='name'
                headers={HEADERS}
                visibleColumns={columns}
                columnsTemporary={columnsTemporary}
                headerActions={
                    <>
                        <TextField placeholder='Pesquisar' />
                        <Button
                            fullWidth
                            size='small'
                            variant='contained'
                            sx={{ height: 'fit-content' }}>
                            Aplicar Filtros
                        </Button>
                    </>
                }
                handleOpen={handleOpen}
                rowsContent={handleContent}
                setColumnsTemporary={setColumnsTemporary}
                onCancel={handleCancel}
                onConfirm={handleConfirmColumns}
            />
        </>
    )
}

const INTERACTIVE_TABLE_DESCRIPTION = [
    'The full wiring: toolbar, column preferences dialog and pagination.',
    '',
    'Note what the story itself has to own — the visible columns, the',
    'temporary selection while the dialog is open, and the body rows built',
    'from `getOrderedVisibleColumns`. The table coordinates that flow, it',
    'does not hold it.',
    '',
    'Toggle a column, confirm, then reload the page: the choice survives,',
    'because `setVisibleColumns` wrote it to `localStorage` under the',
    '`name` of the table.'
].join('\n')

const FRAMED_DESCRIPTION = [
    'The frame look. `framed` takes the border off the `table` element and',
    'puts it on a rounded wrapper, then drops the border of the last row so',
    'it does not collide with the frame.',
    '',
    'It matters that the border moves rather than being added: a border on',
    'the table itself would show square corners inside the rounded frame.',
    '',
    '`borderRadius` overrides the 12px default. A bare number is read as',
    'pixels.'
].join('\n')

const STICKY_HEADER_DESCRIPTION = [
    '`maxHeight` bounds the wrapper so there is something to scroll, and',
    '`stickyHeader` pins the header while the body moves under it.',
    'Setting `maxHeight` also thins the scrollbar.',
    '',
    '`cellPadding` reaches the header cells only. The body cells in this',
    'story come from `rowsContent`, so their padding is set on the',
    '`TableCell` the story itself renders.'
].join('\n')

export const interactiveTable: Story = {
    parameters: {
        docs: {
            description: {
                story: INTERACTIVE_TABLE_DESCRIPTION
            }
        }
    },
    render: ({ ...args }) => <InteractiveTable {...args} />,
    args: {
        isInteractive: true,
        name: 'info'
    }
}

export const framed: Story = {
    parameters: {
        docs: {
            description: {
                story: FRAMED_DESCRIPTION
            }
        }
    },
    render: ({ ...args }) => <InteractiveTable {...args} />,
    args: {
        framed: true,
        name: 'framed'
    }
}

export const stickyHeader: Story = {
    parameters: {
        docs: {
            description: {
                story: STICKY_HEADER_DESCRIPTION
            }
        }
    },
    render: ({ ...args }) => <InteractiveTable {...args} />,
    args: {
        stickyHeader: true,
        maxHeight: 200,
        cellPadding: '8px 16px',
        name: 'sticky'
    }
}

const STICKY_FOOTER_DESCRIPTION = [
    '`stickyFooter` pins the pagination to the bottom of the wrapper while',
    'the rows scroll under it, so the page controls stay reachable without',
    'scrolling to the end of the list.',
    '',
    'Same precondition as `stickyHeader` — it needs `maxHeight` to have',
    'something to scroll within — plus `paginated`, since there is no',
    'footer to pin otherwise. The two stick independently and combine.',
    '',
    '`stickyFooter` also flips the table to `border-collapse: separate`,',
    'the way `stickyHeader` already does. Under `collapse` a cell paints',
    'neither its own border nor a shadow — both belong to the table grid',
    'and stay behind when the cell moves — so the stuck footer would come',
    'out with no divider at all.'
].join('\n')

export const stickyFooter: Story = {
    parameters: {
        docs: {
            description: {
                story: STICKY_FOOTER_DESCRIPTION
            }
        }
    },
    render: ({ ...args }) => <InteractiveTable {...args} />,
    args: {
        paginated: true,
        stickyFooter: true,
        maxHeight: 200,
        total: TABLE_DATA.length,
        name: 'sticky-footer'
    }
}
