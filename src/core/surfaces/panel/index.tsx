import React from 'react'
import type { CSSProperties, ChangeEvent, MouseEvent, ReactNode } from 'react'
import { ExpandMore as IconExpand } from '@mui/icons-material'
import { defaultTo } from 'ramda'
import type { IPaperProps } from '@/core/surfaces/paper'
import { ExpansionPaperPanel, Summary, Title } from './styles'

export interface PanelProps extends Omit<IPaperProps, 'title' | 'onChange'> {
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

const NESTED_ELEVATION = 0
const DEFAULT_ELEVATION = 2

const Panel = (props: PanelProps) => {
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
        <ExpansionPaperPanel
            {...otherProps}
            id={id}
            margin='0px'
            expanded={expanded}
            className={className}
            data-testid='panel-component'
            defaultExpanded={defaultTo(true, defaultExpanded)}
            actions={actions}
            details={details}
            detailsStyle={detailsStyle}
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
            expandIcon={
                !hideExpansionIcon && <IconExpand data-testid='expand-icon' />
            }
            style={{
                gridArea: area,
                border: nested ? '1px solid lightgrey' : undefined,
                ...style
            }}
            onChange={onChange}
            onClick={onClick}
            {...omitCursor}
        />
    )
}

export default Panel
