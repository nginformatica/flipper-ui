import { Chip as MuiChip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { FC } from 'react'
import { IDefault } from './Advertise'
import { ChipProps } from '@material-ui/core/Chip'

interface IProps extends IDefault {
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

const Chip: FC<ChipProps & IProps> =
    ({ square, padding, margin, style = {}, ...otherProps }) => {
        const classes = useStyles()

        return (
            <MuiChip
                classes={ square ? classes : undefined }
                style={ { padding, margin, ...style } }
                { ...otherProps }
            />
        )
    }

export default Chip
