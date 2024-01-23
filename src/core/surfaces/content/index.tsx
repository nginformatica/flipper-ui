import React from 'react'
import type { CSSProperties } from 'react'
import { styled } from 'styled-components'
import type { DefaultProps } from '@/core/types'

const StyledContent = styled.main`
    flex: 1;
    transition: all 500ms ease;
`

const ContainerStyles: CSSProperties = {
    flex: 1,
    transition: 'all 500ms ease'
}

export const Content = ({
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
