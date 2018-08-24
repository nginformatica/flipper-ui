import React from 'react'
import _ from 'prop-types'
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

const Box = ({ children, ...otherProps }) =>
    <StyledBox { ...otherProps }>
        { children }
    </StyledBox>

Box.propTypes = {
    style: _.object,
    primary: _.bool,
    children: _.node
}

export default Box
