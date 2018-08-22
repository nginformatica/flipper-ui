import React from 'react'
import _ from 'prop-types'
import styled from 'styled-components'
import { background, primary, text } from '../colors'

const StyledTextArea = styled.textarea`
    padding: 0.5em;
    border-radius: 6px;
    margin: 1em;
    border: 1px solid ${background.dark};
    font-size: 14px;
    line-height: 1.5em;
    color: ${text};
    font-family: 'Roboto', sans-serif;
    transition: all 500ms ease;
    resize: none;
    &:focus {
        border: 1px solid ${primary.normal};
        border-radius: 6px;
    }
`

const TextArea = props => <StyledTextArea { ...props } />

TextArea.propTypes = {
    placeholder: _.string,
    rows: _.number,
    value: _.string,
    style: _.object,
    onChange: _.func
}

export default TextArea
