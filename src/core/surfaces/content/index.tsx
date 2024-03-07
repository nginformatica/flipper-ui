import React from 'react'
import type { CSSProperties } from 'react'
import type { DefaultProps } from '../../types'
import { ContainerStyles, StyledContent } from './styles'

const Content = ({
    children,
    padding,
    margin,
    style = {},
    ...otherProps
}: DefaultProps) => {
    const componentStyle: CSSProperties = Object.assign(
        {},
        ContainerStyles,
        padding,
        margin,
        style
    )

    return (
        <StyledContent {...otherProps} style={componentStyle}>
            {children}
        </StyledContent>
    )
}

export default Content
