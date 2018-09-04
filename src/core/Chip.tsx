import { Chip as MuiChip, withStyles } from '@material-ui/core'
import React from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    label: string
    clickable?: boolean
    color?: 'default' | 'primary' | 'secondary'
    avatar?: React.ReactElement<any>
    deleteIcon?: React.ReactElement<any>
    onDelete?: (value) => void
}

const styles = () => ({
    root: {
        borderRadius: '20px',
        height: '40px'
    }
})

const Chip: React.SFC<IProps> = ({ color = 'primary', padding, margin, style = {}, ...otherProps }) =>
    <MuiChip
        color={ color }
        style={ { padding, margin, ...style } }
        { ...otherProps }
    />

export default withStyles(styles)(Chip)
