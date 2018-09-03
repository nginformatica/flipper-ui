import React from 'react'
import Paper from './Paper'
import Typography from './Typography'

export interface IDefault {
    style?: object
    className?: string
    margin?: number | string
    padding?: number | string
}

interface IProps extends IDefault {
    comment: string
    author: string
    commentStyle?: object
    authorStyle?: object
}

const Advertise = ({ comment, author, commentStyle, authorStyle, ...otherProps }: IProps) =>
    <Paper
        padding={ 16 }
        { ...otherProps }>
        <Typography
            margin={ 12 }
            style={ commentStyle }>
            { comment }
        </Typography>
        <Typography
            margin={ 12 }
            variant="caption"
            style={ authorStyle }>
            { `- ${author}` }
        </Typography>
    </Paper>

export default Advertise
