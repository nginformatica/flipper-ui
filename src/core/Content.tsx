import React from 'react'
import styled from 'styled-components'
import { DefaultProps } from './types'

const StyledContent = styled.main`
    flex: 1;
    transition: all 500ms ease;
`

const Content = ({
    children,
    padding,
    margin,
    style = {},
    ...otherProps
}: DefaultProps) => (
    <StyledContent {...otherProps} style={{ padding, margin, ...style }}>
        {children}
    </StyledContent>
)

export default Content
