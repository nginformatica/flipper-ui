import React from 'react'
import styled from 'styled-components'
import { TChildren } from './Avatar'

interface IProps {
    children?: TChildren
    style?: object
}

const StyledContainer = styled.div`
    display: flex;
    flex: 1;
`

const Container = ({ children, style }: IProps) =>
    <StyledContainer style={ style }>
        { children }
    </StyledContainer>

export default Container
