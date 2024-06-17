import React from 'react'
import type {
    CSSProperties,
    ChangeEvent,
    HTMLAttributes,
    SyntheticEvent
} from 'react'
import MuiAccordion from '@mui/material/Accordion'
import type Typography from '@/core/data-display/typography'
import type { LinearProgress } from '@mui/material'
import type MuiAccordionDetails from '@mui/material/Accordion'
import { StepCardDetails } from './step-card-details'
import { StepCardPanel } from './step-card-panel'
import StepCardSkeleton from './step-card-skeleton'
import { Container } from './styles'

export interface IStepCardProps {
    expanded?: boolean
    onChange?: (
        event?:
            | ChangeEvent<Record<string, unknown>>
            | SyntheticEvent<Element, Event>,
        expanded?: boolean
    ) => void
    fullWidth?: boolean
    loading?: boolean
    percentage: number
    showBottomPercentage?: boolean
    summary: string
    title: string
    subTitle?: string
    image?: string | JSX.Element
    remainingSteps?: number
    time?: number
    steps?: {
        title: string
        done: boolean
        url?: string
    }[]
    rootProps?: HTMLAttributes<HTMLDivElement>
    titleProps?: typeof Typography
    summaryProps?: typeof Typography
    expansionPanelDetailsProps?: typeof MuiAccordionDetails
    linearProgressBarProps?: typeof LinearProgress
    summaryLinearProgressBarProps?: typeof LinearProgress
    expandable?: boolean
    showIcon?: boolean
    padding?: CSSProperties['padding']
    margin?: CSSProperties['margin']
    showSubTitleSkeleton?: boolean
    onStepUrlClick?: (url: string) => void
}

const StepCard = ({
    expanded,
    loading = false,
    percentage,
    time = 0,
    steps,
    remainingSteps = 0,
    title,
    titleProps,
    subTitle,
    image,
    showBottomPercentage = true,
    expandable = true,
    showIcon = true,
    summary,
    summaryProps,
    expansionPanelDetailsProps,
    linearProgressBarProps,
    summaryLinearProgressBarProps,
    rootProps,
    onStepUrlClick,
    fullWidth,
    padding,
    margin,
    showSubTitleSkeleton = false,
    onChange
}: IStepCardProps) =>
    loading ? (
        <StepCardSkeleton
            expandable={expandable}
            subTitleSkeleton={showSubTitleSkeleton}
            showIcon={showIcon}
            showBottomPercentage={showBottomPercentage}
            fullWidth={fullWidth}
        />
    ) : (
        <Container margin={margin} fullWidth={fullWidth} {...rootProps}>
            <MuiAccordion
                {...(expanded ? { expanded } : {})}
                onChange={onChange}>
                <StepCardPanel
                    fullWidth={fullWidth}
                    title={title}
                    padding={padding}
                    summary={summary}
                    expandable={expandable}
                    remainingSteps={remainingSteps}
                    time={time}
                    showIcon={showIcon}
                    showBottomPercentage={showBottomPercentage}
                    subTitle={subTitle}
                    percentage={percentage}
                    titleProps={titleProps}
                    summaryProps={summaryProps}
                    summaryLinearProgressBarProps={
                        summaryLinearProgressBarProps
                    }
                    linearProgressBarProps={linearProgressBarProps}
                />
                {expandable && (
                    <StepCardDetails
                        steps={steps}
                        image={image}
                        expansionPanelDetailsProps={expansionPanelDetailsProps}
                        onStepUrlClick={onStepUrlClick}
                    />
                )}
            </MuiAccordion>
        </Container>
    )

export default StepCard
