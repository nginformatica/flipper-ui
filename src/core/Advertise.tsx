import React, { FC } from 'react'
import { background } from '../colors'
import MuiPaper from './Paper'
import Typography from './Typography'
import styled from 'styled-components'
import type { DefaultProps } from './types'

interface AdvertiseProps extends DefaultProps {
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

const Paper = styled(MuiPaper)`
    display: flex;
    flex-direction: column;
`

const Advertise: FC<AdvertiseProps> = ({
    comment,
    author,
    padding = 4,
    commentStyle = {},
    authorStyle = {},
    ...otherProps
}) => (
    <Paper padding={padding} {...otherProps}>
        <Typography
            margin='0 12px'
            padding='6px 18px'
            style={{ ...styles.border, ...commentStyle }}>
            {comment}
        </Typography>
        <Typography
            margin='0px 12px'
            padding='6px 18px'
            variant='caption'
            style={{ ...styles.border, ...authorStyle }}>
            {author}
        </Typography>
    </Paper>
)

export default Advertise
