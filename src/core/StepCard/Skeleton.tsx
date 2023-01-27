import { Box } from '@material-ui/core'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import { Skeleton } from '@material-ui/lab'
import React, { useCallback } from 'react'
import './colors.css'
import {
    Container,
    NormalProgressContainer,
    StepCardColumn,
    StepCardRow,
    StepContainer,
    TitleContainer
} from './styles'

interface IStepCardPanelProps {
    expandable: boolean
    showBottomPercentage: boolean
    showIcon: boolean
    subTitle?: boolean
}

const StepCardSkeleton = (props: IStepCardPanelProps) => {
    const { expandable, showBottomPercentage, showIcon, subTitle } = props

    const TitleIcon = useCallback(
        () => <Skeleton variant='circle' width={40} height={40} />,
        []
    )

    const Title = useCallback(
        () => (
            <Skeleton
                variant='text'
                style={{ minWidth: '400px' }}
                height={40}
            />
        ),
        []
    )

    const SubTitle = useCallback(
        () => (
            <Skeleton
                variant='text'
                style={{ minWidth: '400px' }}
                height={40}
            />
        ),
        []
    )

    const TitleColumn = useCallback(
        () => (
            <>
                {showIcon && <TitleIcon />}
                <TitleContainer>
                    <Title />
                    {subTitle && <SubTitle />}
                </TitleContainer>
            </>
        ),
        [showIcon, TitleIcon, Title, subTitle, SubTitle]
    )

    const Summary = useCallback(
        () => (
            <Skeleton
                variant='text'
                style={{ minWidth: '400px' }}
                height={40}
            />
        ),
        []
    )
    const SummaryLinearProgress = useCallback(
        () => <Skeleton variant='text' />,
        []
    )

    const NormalProgress = useCallback(
        () => (
            <NormalProgressContainer>
                <Skeleton
                    variant='text'
                    height={40}
                    style={{ minWidth: '100px', margin: '4px 0px' }}
                />
                <Box style={{ width: '100%' }}>
                    <SummaryLinearProgress />
                </Box>
            </NormalProgressContainer>
        ),
        [SummaryLinearProgress]
    )

    const BottomLineProgress = useCallback(
        () => <Skeleton variant='text' />,
        []
    )

    return (
        <Container>
            <MuiExpansionPanel>
                <StepContainer withPadding={!expandable}>
                    <StepCardRow height={expandable ? '100px' : '100%'}>
                        <StepCardColumn justifyContent='start'>
                            <TitleColumn />
                        </StepCardColumn>
                        <StepCardColumn justifyContent='end'>
                            {expandable ? <Summary /> : <NormalProgress />}
                        </StepCardColumn>
                    </StepCardRow>
                    {showBottomPercentage && (
                        <StepCardRow height='15px'>
                            <Box style={{ width: '100%' }}>
                                <BottomLineProgress />
                            </Box>
                        </StepCardRow>
                    )}
                </StepContainer>
            </MuiExpansionPanel>
        </Container>
    )
}

export default StepCardSkeleton
