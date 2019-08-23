import { Chip as MuiChip } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { FC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    label: string
    clickable?: boolean
    color?: 'default' | 'primary' | 'secondary'
    avatar?: JSX.Element
    deleteIcon?: JSX.Element
    onDelete?: (value) => void
}

const useStyles = makeStyles({
    root: {
        borderRadius: '20px',
        height: '40px'
    }
})

const Chip: FC<IProps> = ({
    color = 'primary',
    padding,
    margin,
    style = {},
    ...otherProps
}) => {
    const classes = useStyles()

    return (
        <MuiChip
            classes={ classes }
            color={ color as 'primary' }
            style={ { padding, margin, ...style } }
            { ...otherProps }
        />
    )
}

export default Chip
