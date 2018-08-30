import { Chip as MuiChip, withStyles } from '@material-ui/core'
import React from 'react'

interface IProps {
    style?: object
    label: string
    clickable?: boolean
    color?: 'default' | 'primary' | 'secondary'
    avatar?: React.ReactElement<any>
    deleteIcon?: React.ReactElement<any>
    onDelete?: (value) => void
}

const styles = theme => ({
    root: {
        borderRadius: '20px',
        height: '40px'
    }
})

const Chip = ({ color = 'primary', ...otherProps }: IProps) =>
    <MuiChip color={ color } { ...otherProps } />

export default withStyles(styles)(Chip)
