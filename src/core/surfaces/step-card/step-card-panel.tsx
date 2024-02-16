import React from 'react'
import type { CSSProperties } from 'react'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import { sprintf } from 'sprintf-js'
import type { IStepCardProps } from '.'
import { Typography } from '@/core/data-display/typography'
import { ExpandMore as ExpandMoreIcon } from '@/icons'
import {
    BarWrapper,
    BottomProgressBar,
    CheckIcon,
    NormalProgressContainer,
    PROGRESS_BAR,
    ProgressBar,
    StepCardColumn,
    StepCardRow,
    StepContainer,
    TEXT_ALIGN,
    TitleContainer,
    TypographyProgress,
    TypographySubtitle,
    TypographyTitle
} from './styles'

interface IStepCardPanelProps {
    title: string
    expandable: boolean
    showBottomPercentage: boolean
    linearProgressBarProps: IStepCardProps['linearProgressBarProps']
    summaryProps: IStepCardProps['summaryProps']
    summaryLinearProgressBarProps: IStepCardProps['summaryLinearProgressBarProps']
    titleProps: IStepCardProps['titleProps']
    percentage: number
    summary: string
    remainingSteps: number
    time: number
    showIcon: boolean
    subTitle?: string
    fullWidth?: boolean
    padding?: CSSProperties['padding']
}

const TitleColumn = ({
    showIcon,
    percentage,
    title,
    titleProps,
    subTitle
}: {
    showIcon: boolean
    percentage: number
    title: string
    titleProps: IStepCardProps['titleProps']
    subTitle?: string
}) => (
    <>
        {showIcon && (
            <CheckIcon
                data-testid='step-card-title-icon'
                percentage={percentage}
            />
        )}
        <TitleContainer>
            <TypographyTitle variant='h6' {...titleProps}>
                {title}
            </TypographyTitle>
            {subTitle && (
                <TypographySubtitle variant='h6' {...titleProps}>
                    {subTitle}
                </TypographySubtitle>
            )}
        </TitleContainer>
    </>
)

export const StepCardPanel = (props: IStepCardPanelProps) => {
    const {
        title,
        summary,
        expandable,
        showBottomPercentage,
        summaryProps,
        linearProgressBarProps,
        summaryLinearProgressBarProps,
        percentage,
        remainingSteps,
        time,
        showIcon,
        subTitle,
        titleProps,
        fullWidth,
        padding
    } = props

    return (
        <StepContainer padding={padding}>
            <StepCardRow
                fullWidth={fullWidth}
                minHeight={expandable ? '100px' : '100%'}>
                <StepCardColumn justifyContent='start'>
                    <TitleColumn
                        showIcon={showIcon}
                        percentage={percentage}
                        title={title}
                        titleProps={titleProps}
                        subTitle={subTitle}
                    />
                </StepCardColumn>
                <StepCardColumn justifyContent='end'>
                    {expandable ? (
                        <MuiAccordionSummary
                            style={TEXT_ALIGN}
                            expandIcon={<ExpandMoreIcon fontSize='large' />}>
                            <Typography variant='h6' {...summaryProps}>
                                {sprintf(summary, remainingSteps, time)}
                            </Typography>
                        </MuiAccordionSummary>
                    ) : (
                        <NormalProgressContainer data-testid='normal-progress'>
                            <Typography variant='h6' {...summaryProps}>
                                {summary}
                            </Typography>
                            <TypographyProgress variant='subtitle2'>
                                {`${percentage}%`}
                            </TypographyProgress>
                            <BarWrapper>
                                <ProgressBar
                                    variant='determinate'
                                    value={percentage}
                                    color='primary'
                                    classes={PROGRESS_BAR}
                                    {...summaryLinearProgressBarProps}
                                />
                            </BarWrapper>
                        </NormalProgressContainer>
                    )}
                </StepCardColumn>
            </StepCardRow>
            {showBottomPercentage && (
                <StepCardRow fullWidth={fullWidth} minHeight='15px'>
                    <BarWrapper>
                        <BottomProgressBar
                            variant='determinate'
                            value={percentage}
                            color='primary'
                            classes={PROGRESS_BAR}
                            {...linearProgressBarProps}
                        />
                    </BarWrapper>
                </StepCardRow>
            )}
        </StepContainer>
    )
}
