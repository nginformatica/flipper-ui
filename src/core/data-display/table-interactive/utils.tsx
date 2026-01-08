import React from 'react'
import type { ITableInteractive } from './TableInteractive'
import { TableCellInteractive } from './styles'

export const STORAGE_KEY = 'visible-columns'

export const getDefaultColumns = (
    columns: { name: string; show: boolean }[]
): string[] => columns.filter(col => col.show).map(col => col.name)

export const getInitialColumns = (
    columns: { name: string; label: string; show: boolean }[],
    key: string
): string[] => {
    const stored = localStorage.getItem(STORAGE_KEY)

    if (stored) {
        const parsed = JSON.parse(stored)

        if (parsed?.[key] && Array.isArray(parsed[key])) {
            return parsed[key]
        }
    }

    return columns.filter(col => col.show).map(col => col.name)
}

export const setVisibleColumns = (columns: string[], key: string) => {
    const stored = localStorage.getItem(STORAGE_KEY)

    let parsed: Record<string, string[]> = {}

    parsed = stored ? JSON.parse(stored) : {}

    parsed[key] = columns

    localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed))
}

export const generateHeader = (
    header: ITableInteractive['headers'][number],
    visibleColumns?: string[] | undefined,
    sortable?: boolean,
    fixed?: boolean
) => {
    if (!visibleColumns?.includes(header.name)) return null

    return (
        <TableCellInteractive
            name={header.name}
            sortable={sortable}
            width={header.width}
            key={header.name + '-header'}
            fixed={fixed ? 'fixed' : undefined}>
            {header.label}
        </TableCellInteractive>
    )
}

export const getVisibleColumns = (
    headers: {
        name: string
        label: string
    }[],
    visibleColumns?: string[] | undefined
) => {
    return visibleColumns ?? headers.map(h => h.name)
}

export const getOrderedVisibleColumns = (
    headers: {
        name: string
        label: string
    }[],
    visibleColumns?: string[] | undefined
) => {
    return headers
        .filter(header => visibleColumns?.includes(header.name))
        .map(header => header.name)
}
