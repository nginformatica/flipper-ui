import { Chip as MuiChip, withStyles } from '@material-ui/core'
import React, { SFC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    label: string
    clickable?: boolean
    color?: 'default' | 'primary' | 'secondary'
    avatar?: JSX.Element
    deleteIcon?: JSX.Element
    onDelete?: (value) => void
}

const styles = () => ({
    root: {
        borderRadius: '20px',
        height: '40px'
    }
})

const Chip: SFC<IProps> = ({
    color = 'primary',
    padding,
    margin,
    style = {},
    ...otherProps
}) =>
    <MuiChip
        color={ color as 'primary' }
        style={ { padding, margin, ...style } }
        { ...otherProps }
    />

export default withStyles(styles)(Chip)
