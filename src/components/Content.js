import styled from 'styled-components'
import React from 'react'
import _ from 'prop-types'

const StyledContent = styled.main`
    flex: 1;
    transition: all 500ms ease;
`

const Content = ({ children, style }) =>
    <StyledContent style={ style }>
        { children }
    </StyledContent>

Content.propTypes = {
    children: _.node,
    style: _.object
}

export default Content