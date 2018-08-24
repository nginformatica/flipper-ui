import React from 'react'
import _ from 'prop-types'
import { T, cond, prop } from 'ramda'
import styled from 'styled-components'
import { background, transparent, text, primary, white } from '../colors'

const getBackgroundColor = cond([
    [prop('outline'), () => white],
    [prop('raised'), () => primary.normal],
    [prop('active'), () => primary.normal],
    [prop('transparent'), () => transparent],
    [T, () => background.normal]
])

const getHoverBackground = cond([
    [prop('outline'), () => primary.dark],
    [prop('raised'), () => primary.dark],
    [prop('active'), () => primary.dark],
    [prop('transparent'), () => background.normal],
    [T, () => background.dark]
])

const getColor = cond([
    [prop('outline'), () => primary.normal],
    [prop('raised'), () => white],
    [prop('active'), () => white],
    [prop('transparent'), () => primary.normal],
    [T, () => text]
])

const getHoverColor = cond([
    [prop('outline'), () => white],
    [prop('raised'), () => white],
    [prop('active'), () => white],
    [prop('transparent'), () => primary.normal],
    [T, () => text]
])

const StyledButton = styled.button`
    margin: ${props => props.mini
        ? '0.25em'
        : '1em'
    };
    padding: ${props => props.mini
        ? '0 0.5em'
        : '0.5em 1em'
    };
    font-size: ${props => props.mini
        ? '0.80em'
        : '1em'
    };
    border: 2px solid ${getBackgroundColor};
    border-radius: 3px;
    font-weight: bold;
    background: ${getBackgroundColor};
    color: ${getColor};
    cursor: pointer;
    height: ${props => props.mini
        ? '24px'
        : '36px'
    };
    transition: all 500ms ease;
    border: 2px solid ${props => props.outline
        ? primary.normal
        : getBackgroundColor(props)
    };
    box-shadow: ${props => props.raised
        ? '1px 1px 3px 0px rgba(66,66,66,0.75)'
        : 'none'
    };
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background: ${getHoverBackground};
        border: 2px solid ${getHoverBackground};
        color: ${getHoverColor};
    }
`

const Button = ({ children, ...otherProps }) =>
    <StyledButton { ...otherProps }>
        { children }
    </StyledButton>

Button.propTypes = {
    mini: _.bool,
    outline: _.bool,
    active: _.bool,
    transparent: _.bool,
    style: _.object,
    onClick: _.func
}

export default Button
