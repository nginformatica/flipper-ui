import React from 'react'
import _ from 'prop-types'
import styled from 'styled-components'
import { white } from '../colors'

const AdvertiseContainer = styled.div`
    background-color: #FFFFFF;
    opacity: 0.95;
    border-radius: 6px;
    padding: 12px 18px 12px 32px;
`

const AdvertiseContent = styled.div`
    border-left: 1px solid #000000;
    padding-left: 18px;
`

const Comment = styled.p`
    font-weight: lighter;
    margin: 0px;
    padding: 6px 0px;
`

const Person = styled.p`
    color: #666666;
    margin: 0px;
    padding: 6px 0px;
`

const Advertise = ({ comment, person, styleComment, stylePerson, ...otherProps }) =>
    <AdvertiseContainer { ...otherProps }>
        <AdvertiseContent>
            <Comment>{ comment }</Comment>
            <Person>- { person }</Person>
        </AdvertiseContent>
    </AdvertiseContainer>

Advertise.propTypes = {
    comment: _.string,
    person: _.string,
    style: _.object,
    styleComment: _.object,
    stylePerson: _.object
}

export default Advertise
