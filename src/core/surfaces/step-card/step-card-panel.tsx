import React from 'react'
import type { CSSProperties } from 'react'
import { LinearProgress } from '@material-ui/core'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import { sprintf } from 'sprintf-js'
import type { IStepCardProps } from '.'
import Typography from '@/core/data-display/typography'
import {
    BarWrapper,
    NormalProgressContainer,
    StepCardColumn,
    StepCardRow,
    StepContainer,
    TitleContainer
} from './styles'
import {
    CheckCircle as CheckCircleIcon,
    ExpandMore as ExpandMoreIcon
} from '@/icons'
import { theme } from '@/theme'

const { feedback, grays } = theme.colors

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
                                        : grays.g3
                            }}
                        />
                    )}
                    <TitleContainer>
                        <Typography
                            variant='h6'
                            style={{
                                color: grays.g1,
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
                                    color: grays.g3,
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
                            <Typography variant='h6' {...summaryProps}>
                                {summary}
                            </Typography>
                            <Typography
                                variant='subtitle2'
                                style={{
                                    position: 'absolute',
                                    right: 8
                                }}>{`${percentage}%`}</Typography>
                            <BarWrapper>
                                <LinearProgress
                                    variant='determinate'
                                    value={percentage}
                                    color='primary'
                                    classes={{
                                        barColorPrimary: 'barColorPrimary'
                                    }}
                                    style={{
                                        borderRadius: 10,
                                        height: '16px',
                                        backgroundColor: grays.g5
                                    }}
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
                        <LinearProgress
                            variant='determinate'
                            value={percentage}
                            color='primary'
                            classes={{
                                barColorPrimary: 'barColorPrimary'
                            }}
                            style={{
                                height: '16px',
                                backgroundColor: grays.g5
                            }}
                            {...linearProgressBarProps}
                        />
                    </BarWrapper>
                </StepCardRow>
            )}
        </StepContainer>
    )
}
