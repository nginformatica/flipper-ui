import React from 'react'
import type { CSSProperties } from 'react'
import MuiAccordion from '@material-ui/core/Accordion'
import { Box, Skeleton } from '@mui/material'
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
                                    style={{ minWidth: '400px' }}
                                    height={40}
                                />
                                {subTitleSkeleton && (
                                    <Skeleton
                                        variant='text'
                                        style={{ minWidth: '400px' }}
                                        height={40}
                                    />
                                )}
                            </TitleContainer>
                        </StepCardColumn>
                        <StepCardColumn justifyContent='end'>
                            {expandable ? (
                                <Skeleton
                                    variant='text'
                                    style={{ minWidth: '400px' }}
                                    height={40}
                                />
                            ) : (
                                <NormalProgressContainer>
                                    <Skeleton
                                        variant='text'
                                        height={40}
                                        style={{
                                            minWidth: '100px',
                                            margin: '4px 0px'
                                        }}
                                    />
                                    <Box style={{ width: '100%' }}>
                                        <Skeleton variant='text' />
                                    </Box>
                                </NormalProgressContainer>
                            )}
                        </StepCardColumn>
                    </StepCardRow>
                    {showBottomPercentage && (
                        <StepCardRow minHeight='15px' fullWidth={fullWidth}>
                            <Box style={{ width: '100%' }}>
                                <Skeleton variant='text' />
                            </Box>
                        </StepCardRow>
                    )}
                </StepContainer>
            </MuiAccordion>
        </Container>
    )
}

export default StepCardSkeleton
