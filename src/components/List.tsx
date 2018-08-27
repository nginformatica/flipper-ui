import React from 'react'
import _ from 'prop-types'
import styled from 'styled-components'
import ListItem from './ListItem';

const StyledList = styled.div`
    flex: 1;
    margin: 6px 0;
`

const List = ({ options, style, onlyIcons, onClick }) =>
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

List.defaultProps = {
    options: []
}

List.propTypes = {
    onlyIcons: _.bool,
    options: _.array,
    style: _.object,
    onClick: _.func
}

export default List
