import React from 'react'
import type { MouseEventHandler, ReactElement, ReactNode } from 'react'
import MuiChip from '@mui/material/Chip'
import type { DefaultProps } from '../../types'
import type { ChipProps } from '@mui/material/Chip'

export interface IChipProps extends ChipProps, Omit<DefaultProps, 'children'> {
    label?: ReactNode
    icon?: ReactElement
    avatar?: ReactElement
    square?: boolean
    color?:
        | 'default'
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning'
    size?: 'small' | 'medium'
    variant?: 'outlined' | 'filled'
    onClick?: MouseEventHandler<HTMLDivElement> | undefined
    onDelete?: ((event: unknown) => void) | undefined
}

const Chip = ({
    square,
    padding,
    margin,
    style = {},
    ...otherProps
}: IChipProps) => {
    return (
        <MuiChip
            style={{ padding, margin, ...style }}
            sx={{
                borderRadius: square ? '4px' : '16px',
                '.MuiChip-avatar': {
                    borderRadius: square ? '4px' : '16px'
                }
            }}
            {...otherProps}
        />
    )
}

export default Chip
