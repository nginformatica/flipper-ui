import React from 'react'
import _ from 'prop-types'
import styled from 'styled-components'
import { background } from '../colors'

const StyledHeader = styled.header`
    position: ${props => props.position || 'sticky'};
    top: 0;
    left: 0;
    z-index: 1;
    padding: 12px 24px;
    width: calc(100% - 48px);
    line-height: 36px;
    display: flex;
    align-items: center;
    background: ${background.normal};
`

const Header = ({ children, style }) =>
    <StyledHeader style={ style }>
        { children }
    </StyledHeader>

const StyledHeaderTitle = styled.h2`
    margin: 0px;
    flex: 1;
`

export const HeaderTitle = ({ children, style }) =>
    <StyledHeaderTitle style={ style }>
        { children }
    </StyledHeaderTitle>


Header.propTypes = {
    children: _.node,
    style: _.object
}

HeaderTitle.propTypes = {
    children: _.node,
    style: _.object
}

export default Header