import React from 'react'
import styled from 'styled-components'
import { TChildren } from './Avatar'

interface IProps {
    children?: TChildren
    style?: object
}

const StyledContent = styled.main`
    flex: 1;
    transition: all 500ms ease;
`

const Content = ({ children, style }: IProps) =>
    <StyledContent style={ style }>
        { children }
    </StyledContent>

export default Content
