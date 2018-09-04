import { inc, times } from 'ramda'
import React, { Component } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import styled from 'styled-components'
import { IDefault } from './Advertise'
import Button from './Button'

interface IProps extends IDefault {
    pages?: number
    active: number
    onNext: () => {}
    onPrevious: () => {}
    onNavigate: (page) => {}
}

const Content = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    justify-content: center;
    margin: 0.75em;
`

class Pagination extends Component<IProps> {
    public render() {
        const {
            active,
            style,
            padding,
            margin,
            pages = 1,
            className
        } = this.props
        const allPages = times(inc, pages || 1)

        return (
            <Content
                className={ className }
                style={ { padding, margin, ...style } }>
                <Button
                    mini
                    onClick={ this.props.onPrevious }>
                    <MdKeyboardArrowLeft />
                </Button>
                {
                    allPages.map(page =>
                        <Button
                            mini
                            key={ page }
                            color={ page === active ? 'primary' : 'default' }
                            onClick={ () => this.props.onNavigate(page) }>
                            { page }
                        </Button>
                    )
                }
                <Button
                    mini
                    onClick={ this.props.onNext }>
                    <MdKeyboardArrowRight />
                </Button>
            </Content>
        )
    }
}

export default Pagination
