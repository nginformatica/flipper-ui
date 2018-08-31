import React, { Component } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import styled from 'styled-components'
import { background } from '../colors'
import Button from './Button'

interface IProps {
    top: number
    open: boolean
    place?: string
    position?: string
    onToggle: () => {}
    children: React.ReactNode
}

interface IWrapper {
    width: number
    place: string
}

interface ISidebar {
    position: string
    width: number
    top?: number
    place: string
}

interface IAction {
    place?: string
}

const styles = {
    button: {
        alignSelf: 'right',
        margin: 4,
        padding: '0 0.25em'
    },
    icon: {
        fontSize: '24px'
    }
}

const Wrapper = styled.div<IWrapper>`
    display: block;
    position: relative;
    width: ${props => props.width}px;
    ${props => props.place}: 0;
`

const StyledSidebar = styled.div<ISidebar>`
    position: ${props => props.position};
    width: ${props => props.width}px;
    height: 100%;
    top: ${props => props.top || 0}px;
    text-align: center;
    bottom: 0;
    background: ${background.normal};
    ${props => props.place}: 0;
`

const Action = styled.div<IAction>`
    flex-direction: ${props => props.place === 'left'
        ? 'row-reverse'
        : 'row'
    };
    display: flex;
`

class Sidebar extends Component<IProps> {
    public static defaultProps = {
        place: 'left',
        position: 'relative'
    }

    public render() {
        const { open, place, position, top } = this.props
        const width = open
            ? 200
            : 72

        const iconToLeft = (place === 'left' && open)
            || (place === 'right' && !open)

        return (
            <Wrapper
                place={ place }
                width={ width }>
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

export default Sidebar
