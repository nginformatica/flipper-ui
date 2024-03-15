import React from 'react'
import { Chip as MuiChip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import type { DefaultProps } from '../../types'
import type { ChipProps as MuiChipProps } from '@material-ui/core'

export interface IChipProps
    extends MuiChipProps,
        Omit<DefaultProps, 'children'> {
    square?: boolean
}

const useStyles = makeStyles({
    root: {
        borderRadius: '4px'
    },
    avatar: {
        borderRadius: '2px'
    }
})

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
