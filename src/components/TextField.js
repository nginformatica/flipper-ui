import React from 'react'
import _ from 'prop-types'
import styled from 'styled-components'
import { background, primary, text } from '../colors'

const StyledTextField = styled.input`
    outline: none;
    padding: 8px;
    border-radius: 6px;
    line-height: 1.5em;
    margin: 1em;
    border: 1px solid ${background.dark};
    color: ${text};
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    transition: all 500ms ease;
    height: 24px;
    &:focus {
        border: 1px solid ${primary.normal};
        border-radius: 6px;
    }
`

const TextField = props => <StyledTextField { ...props } />

TextField.propTypes = {
    placeholder: _.string,
    value: _.string,
    style: _.object,
    onChange: _.func
}

export default TextField
