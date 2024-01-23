import React from 'react'
import type { CSSProperties } from 'react'
import { styled } from 'styled-components'
import type { DefaultProps } from '@/core/types'
import { Typography } from '@/core/data-display/typography'
import MuiPaper from '@/core/surfaces/paper'
import { theme } from '@/theme'

const { grays } = theme.colors

export interface AdvertiseProps extends DefaultProps {
    /**
     * The comment to be displayed
     */
    comment: string
    /**
     * The author of the comment
     */
    author: string
    /**
     * The style of the comment
     * @optional
     */
    commentStyle?: CSSProperties
    /**
     * The style of the author
     * @optional
     */
    authorStyle?: CSSProperties
}

const styles = {
    border: {
        borderLeft: `1px solid ${grays.g5}`
    }
}

const Paper = styled(MuiPaper)`
    display: flex;
    flex-direction: column;
`

const Advertise = ({
    comment,
    author,
    padding = 4,
    commentStyle = {},
    authorStyle = {},
    ...otherProps
}: AdvertiseProps) => (
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
