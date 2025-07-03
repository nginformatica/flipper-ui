import React from 'react'
import type { ITableInteractive } from './TableInteractive'
import IconButton from '@/core/inputs/icon-button'
import { IconSettings } from '@/icons/mui'
import { TableHeaderContent } from './styles'

export type ITableInteractiveHeader = Pick<
    ITableInteractive,
    'handleOpen' | 'headerActions'
>

export const TableInteractiveHeader = (props: ITableInteractiveHeader) => {
    return (
        <TableHeaderContent>
            <div>{props.headerActions}</div>
            <IconButton padding='4px' onClick={props.handleOpen}>
                <IconSettings color='primary' />
            </IconButton>
        </TableHeaderContent>
    )
}
