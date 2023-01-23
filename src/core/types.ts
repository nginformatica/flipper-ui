import type { CSSProperties } from 'react'

export interface DefaultProps {
    children?: React.ReactNode
    style?: CSSProperties
    className?: string
    margin?: number | string
    padding?: number | string
    name?: string
    id?: string
}

export interface HTMLElementWithDataCy<T> extends React.HTMLAttributes<T> {
    'data-cy': string
}
