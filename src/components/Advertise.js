import React from 'react'
import _ from 'prop-types'
import styled from 'styled-components'
import { white, black, silver } from '../colors'

const AdvertiseContainer = styled.div`
    background-color: ${white};
    opacity: 0.95;
    border-radius: 6px;
    padding: 12px 18px 12px 32px;
`

const AdvertiseContent = styled.div`
    border-left: 1px solid ${black};
    padding-left: 18px;
`

const Comment = styled.p`
    font-weight: lighter;
    margin: 0px;
    padding: 6px 0px;
`

const Author = styled.p`
    color: ${silver.medium};
    margin: 0px;
    padding: 6px 0px;
`

const Advertise = ({ comment, author, styleComment, styleAuthor, ...otherProps }) =>
    <AdvertiseContainer { ...otherProps }>
        <AdvertiseContent>
            <Comment style={ styleComment }>{ comment }</Comment>
            <Author style={ styleAuthor }>- { author }</Author>
        </AdvertiseContent>
    </AdvertiseContainer>

Advertise.propTypes = {
    comment: _.string,
    author: _.string,
    style: _.object,
    commentStyle: _.object,
    authorStyle: _.object
}

export default Advertise
