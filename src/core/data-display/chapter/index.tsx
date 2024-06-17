import React from 'react'
import type { CSSProperties, ReactNode } from 'react'
import type { DefaultProps } from '../../types'
import Typography from '@/core/data-display/typography'
import { Container, Line } from './styles'

export interface LineProps extends DefaultProps {
    primary?: boolean
    width?: string
    variant?:
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'subtitle1'
        | 'subtitle2'
        | 'body1'
        | 'body2'
        | 'caption'
        | 'button'
        | 'overline'
    childrenStyle?: CSSProperties
    children?: ReactNode
    'data-testid'?: string
}

const Chapter = ({
    padding,
    margin,
    style,
    childrenStyle,
    children,
    variant,
    primary,
    ...otherProps
}: LineProps) => {
    return (
        <Container {...otherProps}>
            <Line primary={primary} style={{ padding, margin, ...style }} />
            <Typography
                variant={variant}
                margin='0px 10px'
                style={{ ...childrenStyle }}>
                {children}
            </Typography>
            <Line primary={primary} style={{ padding, margin, ...style }} />
        </Container>
    )
}

export default Chapter
