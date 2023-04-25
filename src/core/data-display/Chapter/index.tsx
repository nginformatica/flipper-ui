import type { TypographyProps } from '@material-ui/core/Typography'
import React, { CSSProperties } from 'react'
import styled from 'styled-components'
import { DefaultProps } from '../../types'
import Typography from '@/core/data-display/Typography'
import { theme } from 'nginformatica-styleguide'

const { grays } = theme.colors

export interface LineProps extends DefaultProps {
    primary?: boolean
    width?: string
    variant?: TypographyProps['variant']
    childrenStyle?: CSSProperties
    children?: React.ReactNode
    'data-testid'?: string
}

const StyledLine = styled.div<LineProps>`
    height: 1px;
    flex: 1;
    min-height: 0.75px;
    max-height: 3px;
    align-self: center;
    background-color: ${props => (props.primary ? grays.g4 : grays.g6)}; ;
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
