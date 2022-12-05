import React, { FC } from 'react'
import styled from 'styled-components'
import { DefaultProps } from './types'

const StyledContainer = styled.div`
    display: flex;
    flex: 1;
`

const Container: FC<DefaultProps> = ({
    children,
    padding,
    margin,
    style = {},
    ...otherProps
}) => (
    <StyledContainer style={{ padding, margin, ...style }} {...otherProps}>
        {children}
    </StyledContainer>
)

export default Container
