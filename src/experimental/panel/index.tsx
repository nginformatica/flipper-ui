import React from 'react'
import type { CSSProperties, ChangeEvent, MouseEvent, ReactNode } from 'react'
import { defaultTo } from 'ramda'
import { styled } from 'styled-components'
import type { PaperProps as FlipperPaperProps } from '@/core/surfaces/paper'
import { ExpandMore as IconExpand } from '@/icons'
import { ExpansionPanel, Typography } from '@/index'

const Paper = styled(ExpansionPanel)`
    && {
        border-radius: 4px;
        ::before {
            height: 0px;
            background-color: transparent;
        }
    }
`

export interface PaperProps
    extends Omit<FlipperPaperProps, 'title' | 'onChange'> {
    expanded?: boolean
    defaultExpanded?: boolean
    hideSummary?: boolean
    elevation?: number
    summary?: ReactNode
    title?: string | ReactNode
    area?: string
    details?: JSX.Element
    actions?: JSX.Element
    nested?: boolean
    id?: string
    style?: CSSProperties
    className?: string
    hideExpansionIcon?: boolean
    detailsStyle?: CSSProperties
    onChange?(
        event?: ChangeEvent<Record<string, unknown>>,
        expanded?: boolean
    ): void
    onClick?(event: MouseEvent<HTMLDivElement>): void
}

const Summary = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`

const Title = styled(Typography)`
    && {
        flex: 1;
    }
`

const NESTED_ELEVATION = 0
const DEFAULT_ELEVATION = 2

export const Panel = (props: PaperProps) => {
    const {
        hideExpansionIcon,
        expanded,
        defaultExpanded,
        id,
        nested,
        elevation,
        hideSummary,
        title,
        summary,
        details,
        actions,
        area,
        style,
        className,
        detailsStyle,
        onChange,
        onClick,
        ...otherProps
    } = props
    const omitCursor = hideExpansionIcon
        ? { summaryStyle: { cursor: 'auto' } }
        : undefined

    return (
        <Paper
            {...otherProps}
            expanded={expanded}
            id={id}
            data-testid='panel-component'
            defaultExpanded={defaultTo(true, defaultExpanded)}
            elevation={
                nested
                    ? NESTED_ELEVATION
                    : defaultTo(DEFAULT_ELEVATION, elevation)
            }
            summary={
                !hideSummary && (
                    <Summary>
                        {title && (
                            <Title noWrap variant='subtitle1'>
                                {title}
                            </Title>
                        )}
                        {summary}
                    </Summary>
                )
            }
            details={details}
            expandIcon={
                !hideExpansionIcon && <IconExpand data-testid='expand-icon' />
            }
            actions={actions}
            margin='0px'
            style={{
                gridArea: area,
                border: nested ? '1px solid lightgrey' : undefined,
                ...style
            }}
            className={className}
            detailsStyle={detailsStyle}
            onChange={onChange}
            onClick={onClick}
            {...omitCursor}
        />
    )
}

export default Panel
