import React from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { default as styled } from 'styled-components'
import type { DefaultProps } from '../../types'
import type { TypographyProps } from '@material-ui/core/Typography'
import { Typography } from '@/core/data-display/typography'
import { theme } from '@/theme'

const { grays } = theme.colors

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

const StyledLine = styled.div<LineProps>`
    height: 1px;
    flex: 1;
    min-height: 0.75px;
    max-height: 3px;
    align-self: center;
    background-color: ${props => (props.primary ? grays.g4 : grays.g6)};
`

const Container = styled.div`
    display: flex;

    & div:first-child {
        margin-right: 10px;
    }

    & div:last-child {
        margin-left: 10px;
    }
`

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
    const Line = (props: LineProps) => (
        <StyledLine {...props} style={{ padding, margin, ...style }} />
    )

    return (
        <Container {...otherProps}>
            <Line primary={primary} />
            <Typography variant={variant} style={{ ...childrenStyle }}>
                {children}
            </Typography>
            <Line primary={primary} />
        </Container>
    )
}

export default Chapter
