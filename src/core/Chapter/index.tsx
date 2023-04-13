import type { TypographyProps } from '@material-ui/core/Typography'
import React, { CSSProperties } from 'react'
import styled from 'styled-components'
import { background, primary as primaryColor } from '../../colors'
import { DefaultProps } from '../types'
import Typography from '../Typography'

export interface LineProps extends DefaultProps {
    primary?: boolean
    width?: string
    variant?: TypographyProps['variant']
    childrenStyle?: CSSProperties
    children?: React.ReactNode
    'data-testid'?: string
}

const StyledLine = styled.hr<LineProps>`
    --color: ${props =>
        props.primary ? primaryColor.normal : background.normal};
    flex: 1;
    min-height: 0.75px;
    max-height: 3px;
    align-self: center;
    background-color: var(--color);
`

const Container = styled.div`
    display: flex;

    & hr:first-child {
        margin-right: 10px;
    }

    & hr:last-child {
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
    ...otherProps
}: LineProps) => {
    const Line = (props: LineProps) => (
        <StyledLine style={{ padding, margin, ...style }} {...props} />
    )

    return (
        <Container {...otherProps}>
            <Line />
            <Typography variant={variant} style={{ ...childrenStyle }}>
                {children}
            </Typography>
            <Line />
        </Container>
    )
}

export default Chapter