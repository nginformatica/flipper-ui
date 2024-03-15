import React from 'react'
import type { CSSProperties, ReactNode } from 'react'
import type { DefaultProps } from '../../types'
import type { TypographyProps } from '@material-ui/core/Typography'
import Typography from '@/core/data-display/typography'
import { Container, StyledLine } from './styles'

export interface LineProps extends DefaultProps {
    primary?: boolean
    width?: string
    variant?: TypographyProps['variant']
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
            <StyledLine
                primary={primary}
                style={{ padding, margin, ...style }}
            />
            <Typography variant={variant} style={{ ...childrenStyle }}>
                {children}
            </Typography>
            <StyledLine
                primary={primary}
                style={{ padding, margin, ...style }}
            />
        </Container>
    )
}

export default Chapter
