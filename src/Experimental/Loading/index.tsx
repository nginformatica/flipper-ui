import { Progress } from '@/index'
import React, { useMemo } from 'react'
import styled from 'styled-components'

export interface IProps {
    padding?: number | string
    margin?: number | string
    size?: number
}

const LoadingContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`

const Loading = (props: IProps) => {
    const { margin = 48, padding = 24, size = 72 } = props

    const renderLoading = useMemo(
        () => <Progress color='primary' size={size} />,
        [size]
    )

    return useMemo(
        () => (
            <LoadingContainer
                data-testid='loading-component'
                style={{ margin, padding }}>
                {renderLoading}
            </LoadingContainer>
        ),
        [margin, padding, renderLoading]
    )
}

export default Loading
