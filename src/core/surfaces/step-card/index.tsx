import React from 'react'
import type {
    CSSProperties,
    ChangeEvent,
    HTMLAttributes,
    SyntheticEvent
} from 'react'
import MuiAccordion from '@mui/material/Accordion'
import type { ITypographyProps } from '@/core/data-display/typography'
import type { AccordionDetailsProps } from '@mui/material/AccordionDetails'
import type { LinearProgressProps } from '@mui/material/LinearProgress'
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
    /**
     * Merged over the title defaults — `variant='h5'`, `align='center'`.
     * `variant` also sets the heading level, so `{ component: 'h2' }` keeps
     * the `h5` type scale on an `<h2>` tag.
     */
    titleProps?: Partial<ITypographyProps>
    /**
     * Merged over the subtitle defaults — `variant='h6'`, `align='center'`.
     * Same heading-level behaviour as `titleProps`.
     */
    subTitleProps?: Partial<ITypographyProps>
    summaryProps?: Partial<ITypographyProps>
    expansionPanelDetailsProps?: Partial<AccordionDetailsProps>
    linearProgressBarProps?: Partial<LinearProgressProps>
    summaryLinearProgressBarProps?: Partial<LinearProgressProps>
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
    subTitleProps,
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
                    subTitleProps={subTitleProps}
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
