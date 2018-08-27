import React from 'react'
import _ from 'prop-types'
import styled from 'styled-components'
import { background, text } from '../colors'

const StyledListItem = styled.div`
    padding: 0.5em 1em;
    font-size: 1em;
    background: ${background.normal};
    color: ${text};
    cursor: pointer;
    height: 36px;
    transition: all 500ms ease;
    display: flex;
    align-items: center;
    &:hover {
        background: ${background.dark};
    }
`

const Label = styled.span`
    margin-left: 24px
`

const IconWrapper = styled.div`
    margin-left: 2px;
`

const ListItem = ({ icon, label, name, onClick, onlyIcon, style }) =>
    <StyledListItem
        style={ style }
        title={ label }
        onClick={ () => onClick(name) }>
        <IconWrapper>
            { icon }
        </IconWrapper>
        { !onlyIcon && <Label>{ label }</Label> }
    </StyledListItem>

ListItem.defaultProps = {
    onClick: () => {}
}

ListItem.propTypes = {
    style: _.object,
    icon: _.node,
    name: _.string.isRequired,
    label: _.string,
    onlyIcon: _.bool,
    onClick: _.func
}

export default ListItem
