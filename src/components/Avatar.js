import React from 'react'
import _ from 'prop-types'
import styled from 'styled-components'
import { background, primary, text, white } from '../colors'

const StyledAvatar = styled.div`
    border-radius: 50%;
    margin: 0.75em;
    align-items: center;
    color: ${props => props.primary ? white : text};
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    background: ${props => props.primary ? primary.normal : background.normal};
    transition: all 500ms ease;
    height: 36px;
    width: 36px;
    justify-content: center;
    display: flex;
`

const Avatar = ({ children, ...otherProps }) =>
    <StyledAvatar { ...otherProps }>
        { children }
    </StyledAvatar>

Avatar.propTypes = {
    style: _.object,
    primary: _.bool
}

export default Avatar
