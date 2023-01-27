import { Box } from '@material-ui/core'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import { Skeleton } from '@material-ui/lab'
import React from 'react'
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

    const TextSkeleton = () => (
        <Skeleton variant='text' style={{ minWidth: '400px' }} height={40} />
    )

    const NormalProgress = () => (
        <NormalProgressContainer>
            <Skeleton
                variant='text'
                height={40}
                style={{ minWidth: '100px', margin: '4px 0px' }}
            />
            <Box style={{ width: '100%' }}>
                <Skeleton variant='text' />
            </Box>
        </NormalProgressContainer>
    )

    return (
        <Container>
            <MuiExpansionPanel>
                <StepContainer withPadding={!expandable}>
                    <StepCardRow height={expandable ? '100px' : '100%'}>
                        <StepCardColumn justifyContent='start'>
                            {showIcon && (
                                <Skeleton
                                    variant='circle'
                                    width={40}
                                    height={40}
                                />
                            )}
                            <TitleContainer>
                                <TextSkeleton />
                                {subTitle && <TextSkeleton />}
                            </TitleContainer>
                        </StepCardColumn>
                        <StepCardColumn justifyContent='end'>
                            {expandable ? <TextSkeleton /> : <NormalProgress />}
                        </StepCardColumn>
                    </StepCardRow>
                    {showBottomPercentage && (
                        <StepCardRow height='15px'>
                            <Box style={{ width: '100%' }}>
                                <Skeleton variant='text' />
                            </Box>
                        </StepCardRow>
                    )}
                </StepContainer>
            </MuiExpansionPanel>
        </Container>
    )
}

export default StepCardSkeleton
