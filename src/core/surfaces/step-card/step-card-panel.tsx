import React from 'react'
import type { CSSProperties } from 'react'
import {
    CheckCircle as CheckCircleIcon,
    ExpandMore as ExpandMoreIcon
} from '@mui/icons-material'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import LinearProgress from '@mui/material/LinearProgress'
import { sprintf } from 'sprintf-js'
import type { IStepCardProps } from '.'
import Typography from '@/core/data-display/typography'
import {
    NormalProgressContainer,
    NormalProgressContent,
    StepCardColumn,
    StepCardRow,
    StepContainer,
    TitleContainer
} from './styles'
import { theme } from '@/theme'

const { feedback, gray } = theme.colors

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
                    {showIcon && (
                        <CheckCircleIcon
                            data-testid='step-card-title-icon'
                            style={{
                                fontSize: 40,
                                color:
                                    percentage === 100
                                        ? feedback.success
                                        : gray[600]
                            }}
                        />
                    )}
                    <TitleContainer>
                        <Typography
                            variant='h6'
                            style={{
                                color: gray[800],
                                fontSize: 24,
                                textAlign: 'center'
                            }}
                            {...titleProps}>
                            {title}
                        </Typography>
                        {subTitle && (
                            <Typography
                                variant='h6'
                                style={{
                                    color: gray[600],
                                    textAlign: 'center'
                                }}
                                {...titleProps}>
                                {subTitle}
                            </Typography>
                        )}
                    </TitleContainer>
                </StepCardColumn>
                <StepCardColumn justifyContent='end'>
                    {expandable ? (
                        <MuiAccordionSummary
                            style={{ textAlign: 'center' }}
                            expandIcon={<ExpandMoreIcon fontSize='large' />}>
                            <Typography variant='h6' {...summaryProps}>
                                {sprintf(summary, remainingSteps, time)}
                            </Typography>
                        </MuiAccordionSummary>
                    ) : (
                        <NormalProgressContainer data-testid='normal-progress'>
                            <NormalProgressContent>
                                <Typography variant='h6' {...summaryProps}>
                                    {summary}
                                </Typography>
                                <Typography variant='subtitle2'>
                                    {`${percentage}%`}
                                </Typography>
                            </NormalProgressContent>
                            <LinearProgress
                                variant='determinate'
                                value={percentage}
                                color='success'
                                style={{
                                    width: '100%',
                                    height: '16px',
                                    borderRadius: 10,
                                    backgroundColor: gray[400]
                                }}
                                {...summaryLinearProgressBarProps}
                            />
                        </NormalProgressContainer>
                    )}
                </StepCardColumn>
            </StepCardRow>
            {showBottomPercentage && (
                <StepCardRow fullWidth={fullWidth} minHeight='15px'>
                    <LinearProgress
                        value={percentage}
                        color='success'
                        variant='determinate'
                        style={{
                            height: '16px',
                            width: '100%',
                            backgroundColor: gray[400]
                        }}
                        {...linearProgressBarProps}
                    />
                </StepCardRow>
            )}
        </StepContainer>
    )
}
