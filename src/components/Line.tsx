import React from 'react'
import styled from 'styled-components'
import { background, primary } from '../colors'

interface IProps {
    primary?: boolean,
    style: object
}

const StyledLine = styled.hr<IProps>`
    flex: 1;
    border: 1px solid ${props => props.primary ? primary.normal : background.normal};
`

const Line = ({ primary, style }: IProps) =>
    <StyledLine
        style={ style }
        primary={ primary }
    />

export default Line
