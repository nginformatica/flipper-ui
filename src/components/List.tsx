import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'

interface IProps {
    onlyIcons?: boolean
    options?: Array<{ name, icon, label }>
    style?: object
    onClick?: (name) => {}
}

const StyledList = styled.div`
    flex: 1;
    margin: 6px 0;
`

const List = ({ options = [], style, onlyIcons, onClick }: IProps) =>
    <StyledList style={ style }>
        {
            options.map(option =>
                <ListItem
                    key={ option.name }
                    icon={ option.icon }
                    label={ option.label }
                    name={ option.name }
                    onlyIcon={ onlyIcons }
                    onClick={ onClick }
                />
            )
        }
    </StyledList>

export default List
