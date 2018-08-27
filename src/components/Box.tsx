import React from 'react'
import styled from 'styled-components'
import { white } from '../colors'

const StyledBox = styled.div`
    background-color: ${white};
    font-family: 'Roboto', sans-serif;
    line-height: 1.2em;
    opacity: 0.95;
    border-radius: 6px;
    min-height: 400px;
    margin-bottom: 10px;
    padding: 28px;
`

interface IProps {
    style?: object,
    primary?: boolean,
    children: React.ReactNode | string | null
}

const Box = ({ children, ...otherProps }: IProps) =>
    <StyledBox { ...otherProps }>
        { children }
    </StyledBox>

export default Box
