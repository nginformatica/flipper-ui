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

const Line: React.SFC<IProps> = ({ padding, margin, style, ...otherProps }) =>
    <StyledLine
        style={ { padding, margin, ...style } }
        { ...otherProps }
    />

export default Line
