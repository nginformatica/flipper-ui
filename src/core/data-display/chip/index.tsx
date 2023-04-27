import { Chip as MuiChip, ChipProps as MuiChipProps } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { DefaultProps } from '../../types'

export interface IChipProps
    extends MuiChipProps,
        Omit<DefaultProps, 'children'> {
    /**
     * If `true`, the chip will be squared.
     */
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

export const Chip = ({
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
