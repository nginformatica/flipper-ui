import React from 'react'
import type { CSSProperties } from 'react'
import type { DefaultProps } from '@/core/types'
import { AdvertiseTypography, AdvertiseContainer } from './styles'

export interface AdvertiseProps extends DefaultProps {
    comment: string
    author: string
    commentStyle?: CSSProperties
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
    <AdvertiseContainer padding={padding} {...otherProps}>
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
    </AdvertiseContainer>
)

export default Advertise
