import React from 'react'
import { background } from '../colors'
import Paper from './Paper'
import Typography from './Typography'

export interface IDefault {
    style?: object
    className?: string
    margin?: number | string
    padding?: number | string
    ref?: React.Ref<any>
}

interface IProps extends IDefault {
    comment: string
    author: string
    commentStyle?: object
    authorStyle?: object
}

const styles = {
    border: {
        borderLeft: `1px solid ${background.dark}`
    }
}

const Advertise: React.SFC<IProps> = ({
    comment,
    author,
    padding = 4,
    commentStyle = {},
    authorStyle = {},
    ...otherProps
}) =>
    <Paper
        padding={ padding }
        { ...otherProps }>
        <Typography
            margin='12px 12px 0px'
            padding='6px 18px'
            style={ { ...styles.border, ...commentStyle } }>
            { comment }
        </Typography>
        <Typography
            margin='0px 12px 12px'
            padding='6px 18px'
            variant='caption'
            style={ { ...styles.border, ...authorStyle } }>
            { author }
        </Typography>
    </Paper>

export default Advertise
