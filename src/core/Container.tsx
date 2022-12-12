import React from 'react'
import styled from 'styled-components'
import { DefaultProps } from './types'

const StyledContainer = styled.div`
    display: flex;
    flex: 1;
`

const Container = ({
    children,
    padding,
    margin,
    style = {},
    ...otherProps
}: DefaultProps) => (
    <StyledContainer style={{ padding, margin, ...style }} {...otherProps}>
        {children}
    </StyledContainer>
)

export default Container
