import React from 'react'
import Progress from '../progress'
import { LoadingContainer } from './styles'

export interface IProps {
    padding?: number | string
    margin?: number | string
    size?: number
}

const Loading = (props: IProps) => {
    const { margin = 48, padding = 24, size = 72 } = props

    return (
        <LoadingContainer
            data-testid='loading-component'
            style={{ margin, padding }}>
            <Progress color='primary' size={size} />
        </LoadingContainer>
    )
}

export default Loading
