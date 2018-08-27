import React from 'react'
import _ from 'prop-types'
import styled from 'styled-components'

interface IProps {
    children?: React.ReactNode,
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