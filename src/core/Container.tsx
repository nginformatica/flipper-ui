import React, { FC } from 'react'
import styled from 'styled-components'
import { IDefault } from './Advertise'

const StyledContainer = styled.div`
    display: flex;
    flex: 1;
`

const Container: FC<IDefault> = ({
    children,
    padding,
    margin,
    style = {},
    ...otherProps
}) =>
    <StyledContainer
        style={ { padding, margin, ...style } }
        { ...otherProps }>
        { children }
    </StyledContainer>

export default Container
