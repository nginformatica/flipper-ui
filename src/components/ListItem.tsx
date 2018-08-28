import React from 'react'
import styled from 'styled-components'
import { background, text } from '../colors'

interface IProps {
    key: string | number
    style?: object
    icon?: React.ReactNode
    name?: string
    label?: string
    onlyIcon?: boolean
    onClick?: (name) => {}
}

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

const ListItem = ({ icon, label, name, onClick, onlyIcon, style }: IProps) =>
    <StyledListItem
        style={ style }
        title={ label }
        onClick={ onClick ? () => onClick(name) : null }>
        <IconWrapper>
            { icon }
        </IconWrapper>
        { !onlyIcon && <Label>{ label }</Label> }
    </StyledListItem>

export default ListItem
