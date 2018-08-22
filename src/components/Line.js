import React from 'react'
import _ from 'prop-types'
import styled from 'styled-components'
import { background, primary } from '../colors'

const StyledLine = styled.hr`
    flex: 1;
    border: 1px solid ${props => props.primary ? primary.normal : background.normal};
`

const Line = ({ primary, style }) =>
    <StyledLine
        style={ style }
        primary={ primary }
    />

Line.propTypes = {
    primary: _.bool,
    style: _.object
}

export default Line
