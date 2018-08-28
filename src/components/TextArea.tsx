import React from 'react'
import styled from 'styled-components'
import { background, primary, text } from '../colors'

interface IProps {
    placeholder?: string,
    rows?: number,
    value?: string,
    style?: object,
    onChange?: (value) => {}
}

const StyledTextArea = styled.textarea`
    outline: none;
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

const TextArea = (props: IProps) => <StyledTextArea { ...props } />

export default TextArea
