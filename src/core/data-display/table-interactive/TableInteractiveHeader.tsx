import React from 'react'
import type { ITableInteractive } from './TableInteractive'
import IconButton from '@/core/inputs/icon-button'
import { IconSettings } from '@/icons/mui'
import { TableHeaderContent } from './styles'

export type ITableInteractiveHeader = Pick<
    ITableInteractive,
    'handleOpen' | 'headerActions' | 'headerMargin' | 'size'
>

export const TableInteractiveHeader = (props: ITableInteractiveHeader) => {
    const isSmall = props.size === 'small'

    return (
        <TableHeaderContent margin={props.headerMargin}>
            <div>{props.headerActions}</div>
            <IconButton
                padding='4px'
                aria-label='Preferências'
                onClick={props.handleOpen}>
                <IconSettings
                    color='primary'
                    fontSize={isSmall ? 'small' : 'medium'}
                />
            </IconButton>
        </TableHeaderContent>
    )
}
