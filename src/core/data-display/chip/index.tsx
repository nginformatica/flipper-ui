import React from 'react'
import type { MouseEventHandler, ReactElement, ReactNode } from 'react'
import MuiChip from '@mui/material/Chip'
import { makeStyles } from '@mui/styles'
import type { DefaultProps } from '@/core/types'
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

const useStyles = makeStyles(() => ({
    root: {
        borderRadius: '4px'
    },
    avatar: {
        borderRadius: '2px'
    }
}))

const Chip = ({
    square,
    padding,
    margin,
    style = {},
    ...otherProps
}: IChipProps) => {
    const classes = useStyles()

    return (
        <MuiChip
            classes={square ? classes : undefined}
            style={{ padding, margin, ...style }}
            {...otherProps}
        />
    )
}

export default Chip
