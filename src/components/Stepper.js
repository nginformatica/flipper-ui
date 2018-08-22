import React, { Component, Fragment } from 'react'
import _ from 'prop-types'
import styled from 'styled-components'
import Avatar from './Avatar'
import Line from './Line'

const Div = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
class Stepper extends Component {
    render() {
        const { steps, active, style } = this.props

        return (
            <Div style={ style }>
                {
                    steps.map((step, index) =>
                        <Fragment key={ index }>
                            { index > 0 ? <Line primary={ index <= active } /> : null }
                            <Avatar primary={ index <= active }>{ step }</Avatar>
                        </Fragment>
                    )
                }
            </Div>
        )
    }
}

Stepper.defaultProps = {
    active: 0
}

Stepper.propTypes = {
    active: _.number,
    steps: _.array.isRequired,
    style: _.object
}

export default Stepper
