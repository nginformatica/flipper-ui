import { Chip as MuiChip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { FC } from 'react'
import { DefaultProps } from './types'
import { ChipProps } from '@material-ui/core/Chip'

export interface IChipProps extends DefaultProps {
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

const Chip: FC<ChipProps & IChipProps> = ({
    square,
    padding,
    margin,
    style = {},
    ...otherProps
}) => {
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
