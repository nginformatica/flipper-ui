import React from 'react'
import _ from 'prop-types'
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    flex: 1;
`

const Container = ({ children, style }) =>
    <StyledContainer style={ style }>
        { children }
    </StyledContainer>

Container.propTypes = {
    children: _.node,
    style: _.object
}

export default Container