import React from 'react'
import type { CSSProperties } from 'react'
import MuiAccordion from '@mui/material/Accordion'
import Skeleton from '@mui/material/Skeleton'
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
    padding?: CSSProperties['padding']
    margin?: CSSProperties['margin']
    fullWidth?: boolean
    subTitleSkeleton?: boolean
}

const StepCardSkeleton = (props: IStepCardPanelProps) => {
    const {
        expandable,
        showBottomPercentage,
        showIcon,
        subTitleSkeleton,
        padding,
        margin,
        fullWidth
    } = props

    return (
        <Container
            data-testid='skeleton-container'
            margin={margin}
            fullWidth={fullWidth}>
            <MuiAccordion>
                <StepContainer padding={padding}>
                    <StepCardRow
                        fullWidth={fullWidth}
                        minHeight={expandable ? '100px' : '100%'}>
                        <StepCardColumn justifyContent='start'>
                            {showIcon && (
                                <Skeleton
                                    variant='circular'
                                    width={40}
                                    height={40}
                                />
                            )}
                            <TitleContainer>
                                <Skeleton
                                    variant='text'
                                    style={{ minWidth: '300px' }}
                                    height={40}
                                />
                                {subTitleSkeleton && (
                                    <Skeleton
                                        variant='text'
                                        style={{
                                            minWidth: '300px'
                                        }}
                                        height={40}
                                    />
                                )}
                            </TitleContainer>
                        </StepCardColumn>
                        <StepCardColumn justifyContent='end'>
                            {expandable ? (
                                <Skeleton
                                    variant='text'
                                    style={{ minWidth: '300px' }}
                                    height={40}
                                />
                            ) : (
                                <NormalProgressContainer>
                                    <Skeleton
                                        variant='text'
                                        height={40}
                                        style={{ minWidth: '200px' }}
                                    />
                                    <Skeleton
                                        variant='text'
                                        style={{ width: '100%' }}
                                    />
                                </NormalProgressContainer>
                            )}
                        </StepCardColumn>
                    </StepCardRow>
                    {showBottomPercentage && (
                        <StepCardRow minHeight='15px' fullWidth={fullWidth}>
                            <Skeleton
                                variant='text'
                                style={{ width: '100%' }}
                            />
                        </StepCardRow>
                    )}
                </StepContainer>
            </MuiAccordion>
        </Container>
    )
}

export default StepCardSkeleton
