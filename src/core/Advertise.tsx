import React from 'react'
import styled from 'styled-components'
import { black, silver, white } from '../colors'

interface IProps {
    comment: string
    author: string
    style?: object
    commentStyle?: object
    authorStyle?: object
}

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

const Advertise = ({ comment, author, commentStyle, authorStyle, ...otherProps }: IProps) =>
    <AdvertiseContainer { ...otherProps }>
        <AdvertiseContent>
            <Comment style={ commentStyle }>{ comment }</Comment>
            <Author style={ authorStyle }>- { author }</Author>
        </AdvertiseContent>
    </AdvertiseContainer>

export default Advertise
