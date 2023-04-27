import React from 'react'
import styled from 'styled-components'
import { DefaultProps } from '../../types'

const StyledContent = styled.main`
    flex: 1;
    transition: all 500ms ease;
`

const ContainerStyles: React.CSSProperties = {
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
    const componentStyle: React.CSSProperties = Object.assign(
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
