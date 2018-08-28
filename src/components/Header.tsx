import React from 'react'
import styled from 'styled-components'
import { background } from '../colors'

interface IProps {
    children?: React.ReactNode
    position?: string
    style?: object
}

const StyledHeader = styled.header<IProps>`
    position: ${props => props.position || 'sticky'};
    top: 0;
    left: 0;
    z-index: 1;
    padding: 12px 24px;
    width: calc(100% - 48px);
    font-family: 'Roboto', sans-serif;
    line-height: 36px;
    display: flex;
    align-items: center;
    background: ${background.normal};
`

const Header = ({ children, style }: IProps) =>
    <StyledHeader style={ style }>
        { children }
    </StyledHeader>

const StyledHeaderTitle = styled.h2`
    margin: 0px;
    flex: 1;
`

export const HeaderTitle = ({ children, style }: IProps) =>
    <StyledHeaderTitle style={ style }>
        { children }
    </StyledHeaderTitle>

export default Header
