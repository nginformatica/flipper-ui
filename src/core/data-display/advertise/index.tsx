import React from 'react'
import type { CSSProperties } from 'react'
import type { DefaultProps } from '../../types'
import { AdvertiseTypography, Paper } from './styles'

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
     * The style of the comments
     * @optional
     */
    commentStyle?: CSSProperties
    /**
     * The style of the author
     * @optional
     */
    authorStyle?: CSSProperties
}

const Advertise = ({
    comment,
    author,
    padding = 4,
    commentStyle = {},
    authorStyle = {},
    ...otherProps
}: AdvertiseProps) => (
    <Paper padding={padding} {...otherProps}>
        <AdvertiseTypography
            margin='0 12px'
            padding='6px 18px'
            style={{ ...commentStyle }}>
            {comment}
        </AdvertiseTypography>
        <AdvertiseTypography
            margin='0px 12px'
            padding='6px 18px'
            variant='caption'
            style={{ ...authorStyle }}>
            {author}
        </AdvertiseTypography>
    </Paper>
)

export default Advertise
