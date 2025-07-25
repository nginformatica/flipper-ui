import React from 'react'
import Switch from '@mui/material/Switch'
import type { ITableInteractive } from './TableInteractive'
import Dialog from '@/core/feedback/dialog'
import Button from '@/core/inputs/button'
import Actions from '../actions'
import Typography from '../typography'
import { setVisibleColumns } from './utils'
import { ActionsWrapper, ContentWrapper } from './styles'

export type ITableDialogPreferences = Pick<
    ITableInteractive,
    | 'open'
    | 'headers'
    | 'columnsTemporary'
    | 'onCancel'
    | 'onConfirm'
    | 'setColumnsTemporary'
> & {
    tableIdentifier: string
}

export const TableDialogPreferences = ({
    open = false,
    headers,
    tableIdentifier,
    columnsTemporary = [],
    onCancel,
    onConfirm,
    setColumnsTemporary
}: ITableDialogPreferences) => {
    const handleChangeTemporaryColumns = (name: string) => {
        setColumnsTemporary?.(prev =>
            prev.includes(name)
                ? prev.filter(col => col !== name)
                : [...prev, name]
        )
    }

    const handleReset = () => {
        const initial = headers.filter(col => col.show).map(col => col.name)

        setColumnsTemporary?.(initial)
    }

    const handleConfirm = () => {
        setVisibleColumns(columnsTemporary, tableIdentifier)
        onConfirm?.()
    }

    return (
        <Dialog
            fullWidth
            open={open}
            maxWidth='sm'
            title='Preferências'
            content={
                <>
                    <Typography
                        variant='body1'
                        fontWeight={500}
                        margin='0 0 16px 0'>
                        Selecione o conteúdo a ser exibido
                    </Typography>
                    {headers.map(it => (
                        <ContentWrapper key={it.name}>
                            <Typography>{it.label}</Typography>
                            <Switch
                                color='primary'
                                name={it.name}
                                slotProps={{
                                    input: { 'aria-label': it.label }
                                }}
                                checked={columnsTemporary.includes(it.name)}
                                onChange={() =>
                                    handleChangeTemporaryColumns(it.name)
                                }
                            />
                        </ContentWrapper>
                    ))}
                </>
            }
            actions={
                <ActionsWrapper>
                    <Button margin='0 16px 16px 16px' onClick={handleReset}>
                        Restaurar preferências
                    </Button>

                    <Actions
                        margin='0 16px 16px 16px'
                        onCancel={onCancel}
                        onConfirm={handleConfirm}
                    />
                </ActionsWrapper>
            }
        />
    )
}
