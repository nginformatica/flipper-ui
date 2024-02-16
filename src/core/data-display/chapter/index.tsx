import React from 'react'
import type { CSSProperties, ReactNode } from 'react'
import type { DefaultProps } from '../../types'
import type { TypographyProps } from '@material-ui/core/Typography'
import { Typography } from '@/core/data-display/typography'
import { Container, StyledLine } from './styles'

export interface LineProps extends DefaultProps {
    /**
     * If true, the avatar will have a primary color background.
     */
    primary?: boolean
    /**
     * The width of the component container.
     */
    width?: string
    /**
     * The variant to use.
     */
    variant?: TypographyProps['variant']
    /**
     * The style applied to the children Typography component.
     */
    childrenStyle?: CSSProperties
    /**
     * The children of the component.
     */
    children?: ReactNode
    'data-testid'?: string
}

export const Chapter = ({
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
