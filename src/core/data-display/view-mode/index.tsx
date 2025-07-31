import React from 'react'
import type { Dispatch, ReactNode, SetStateAction } from 'react'
import Button from '@/core/inputs/button'
import { IconGridView, IconTableView } from '@/icons/mui'
import { ButtonFilterGroup } from './styles'

export interface Filter {
    label: ReactNode
    active: boolean
    onClick: () => void
}

export interface IProps {
    filters?: Filter[]
    activeMode?: boolean
    setActiveMode?: Dispatch<SetStateAction<boolean>>
}

const ViewMode = (props: IProps) => {
    const { filters, activeMode = false, setActiveMode } = props

    const defaultFilters = [
        {
            label: <IconTableView fontSize='small' />,
            active: activeMode,
            onClick: () => setActiveMode?.(prev => !prev)
        },
        {
            label: <IconGridView fontSize='small' />,
            active: !activeMode,
            onClick: () => setActiveMode?.(prev => !prev)
        }
    ]

    const currentFilters = filters || defaultFilters

    return (
        <ButtonFilterGroup size='small'>
            {currentFilters.map((filter, i: number) => (
                <Button
                    key={i}
                    color='primary'
                    variant={filter.active ? 'contained' : 'outlined'}
                    onClick={filter.onClick}>
                    {filter.label}
                </Button>
            ))}
        </ButtonFilterGroup>
    )
}

export default ViewMode
