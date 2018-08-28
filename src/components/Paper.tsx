import React from 'react'
import styled from 'styled-components'
import { text, white } from '../colors'
import { TChildren } from './Avatar'

interface IProps {
    children?: TChildren
    style?: object
}

const StyledPaper = styled.div`
    padding: 2em;
    line-height: 1.5em;
    margin: 0.75em;
    color: ${text};
    background: ${white};
    font-family: 'Roboto', sans-serif;
    transition: all 500ms ease;
    min-height: 50px;
    box-shadow: 0px 0px 12px 2px rgba(66,66,66,0.5);
`

const Paper = ({ children, style }: IProps) =>
    <StyledPaper style={ style }>
        { children }
    </StyledPaper>

export default Paper
