import React, { Component } from 'react'
import _ from 'prop-types'
import styled from 'styled-components'
import { background } from '../colors'
import Button from './Button'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

const styles = {
    button: {
        margin: 12,
        padding: '0 0.25em',
        alignSelf: 'right'
    },
    icon: {
        fontSize: '24px'
    }
}

const Wrapper = styled.div`
    display: block;
    position: relative;
    width: ${props => props.width}px;
    ${props => props.place}: 0;
`

const StyledSidebar = styled.div`
    position: ${props => props.position};
    width: ${props => props.width }px;
    height: 100%;
    top: ${props => props.top || 0}px;
    text-align: center;
    bottom: 0;
    background: ${background.normal};
    ${props => props.place}: 0;
`

const Action = styled.div`
    flex-direction: ${props => props.place === 'left'
        ? 'row-reverse'
        : 'row'
    };
    display: flex;
`

class Sidebar extends Component {
    render() {
        const { open, place, position, top } = this.props
        const width = open
            ? 200
            : 60

        const iconToLeft = (place === 'left' && open)
            || (place === 'right' && !open)

        return (
            <Wrapper width={ width }>
                <StyledSidebar
                    top={ top }
                    place={ place }
                    width={ width }
                    position={ position }>
                    <Action place={ place }>
                        <Button
                            style={ styles.button }
                            onClick={ this.props.onToggle }>
                            {
                               iconToLeft
                                    ? <MdKeyboardArrowLeft style={ styles.icon }/>
                                    : <MdKeyboardArrowRight style={ styles.icon }/>
                            }
                        </Button>
                    </Action>
                    { this.props.children }
                </StyledSidebar>
            </Wrapper>
        )
    }
}

Sidebar.defaultProps = {
    place: 'left',
    position: 'relative'
}

Sidebar.propTypes = {
    top: _.number,
    open: _.bool,
    place: _.string,
    position: _.string,
    onToggle: _.func,
    children: _.node
}

export default Sidebar