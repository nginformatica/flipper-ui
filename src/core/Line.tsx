import React from 'react'
import styled from 'styled-components'
import { background, primary as primaryColor } from '../colors'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    primary?: boolean
}

const StyledLine = styled.hr<IProps>`
    flex: 1;
    border: 1px solid ${props => props.primary
        ? primaryColor.normal
        : background.normal
    };
`

const Line = ({ primary, padding, margin, style }: IProps) =>
    <StyledLine
        style={ { padding, margin, ...style } }
        primary={ primary }
    />

export default Line
