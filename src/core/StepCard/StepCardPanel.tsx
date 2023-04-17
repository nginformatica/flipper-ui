import { LinearProgress } from '@material-ui/core'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import { theme } from 'nginformatica-styleguide'
import React from 'react'
import { sprintf } from 'sprintf-js'
import { IStepCardProps } from '.'
import {
    CheckCircle as CheckCircleIcon,
    ExpandMore as ExpandMoreIcon
} from '../../icons'
import Typography from '../Typography'
import {
    BarWrapper,
    NormalProgressContainer,
    StepCardColumn,
    StepCardRow,
    StepContainer,
    TitleContainer
} from './styles'

const { feedback, grays } = theme.colors
const DONE_COLOR = feedback.success
const UNDONE_COLOR = grays.g3
const UNDONE_TITLE_COLOR = grays.g1
const UNDONE_PROGRESS_COLOR = grays.g5

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
    padding?: React.CSSProperties['padding']
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

    const TitleIcon = () => {
        return (
            <CheckCircleIcon
                style={{
                    fontSize: 40,
                    color: percentage === 100 ? DONE_COLOR : UNDONE_COLOR
                }}
            />
        )
    }

    const Title = () => {
        return (
            <Typography
                variant='h6'
                style={{
                    color: UNDONE_TITLE_COLOR,
                    fontSize: 24,
                    textAlign: 'center'
                }}
                {...titleProps}>
                {title}
            </Typography>
        )
    }

    const SubTitle = () => {
        return (
            <Typography
                variant='h6'
                style={{
                    color: UNDONE_COLOR,
                    textAlign: 'center'
                }}
                {...titleProps}>
                {subTitle}
            </Typography>
        )
    }

    const TitleColumn = () => (
        <>
            {showIcon && <TitleIcon />}
            <TitleContainer>
                <Title />
                {subTitle && <SubTitle />}
            </TitleContainer>
        </>
    )

    const Summary = () => {
        return (
            <MuiAccordionSummary
                style={{ textAlign: 'center' }}
                expandIcon={<ExpandMoreIcon fontSize='large' />}>
                <Typography variant='h6' {...summaryProps}>
                    {sprintf(summary, remainingSteps, time)}
                </Typography>
            </MuiAccordionSummary>
        )
    }

    const SummaryLinearProgress = () => {
        return (
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
                    backgroundColor: UNDONE_PROGRESS_COLOR
                }}
                {...summaryLinearProgressBarProps}
            />
        )
    }

    const NormalProgress = () => (
        <NormalProgressContainer>
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
                <SummaryLinearProgress />
            </BarWrapper>
        </NormalProgressContainer>
    )

    const BottomLineProgress = () => {
        return (
            <LinearProgress
                variant='determinate'
                value={percentage}
                color='primary'
                classes={{
                    barColorPrimary: 'barColorPrimary'
                }}
                style={{
                    height: '16px',
                    backgroundColor: UNDONE_PROGRESS_COLOR
                }}
                {...linearProgressBarProps}
            />
        )
    }

    return (
        <StepContainer padding={padding}>
            <StepCardRow
                fullWidth={fullWidth}
                minHeight={expandable ? '100px' : '100%'}>
                <StepCardColumn justifyContent='start'>
                    <TitleColumn />
                </StepCardColumn>
                <StepCardColumn justifyContent='end'>
                    {expandable ? <Summary /> : <NormalProgress />}
                </StepCardColumn>
            </StepCardRow>
            {showBottomPercentage && (
                <StepCardRow fullWidth={fullWidth} minHeight='15px'>
                    <BarWrapper>
                        <BottomLineProgress />
                    </BarWrapper>
                </StepCardRow>
            )}
        </StepContainer>
    )
}
