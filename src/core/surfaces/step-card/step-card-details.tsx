import React from 'react'
import {
    CheckCircle as CheckCircleIcon,
    Help as HelpIcon
} from '@mui/icons-material'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import List from '@mui/material/List'
import type { IStepCardProps } from '.'
import Typography from '@/core/data-display/typography'
import IconButton from '@/core/inputs/icon-button'
import { ListItemContainer, StepCardColumn } from './styles'
import { theme } from '@/theme'

const { feedback, gray } = theme.colors

interface IStepCardDetailsProps {
    steps: IStepCardProps['steps']
    onStepUrlClick?: IStepCardProps['onStepUrlClick']
    image?: IStepCardProps['image']
    expansionPanelDetailsProps?: IStepCardProps['expansionPanelDetailsProps']
}

const StepsList = ({
    steps,
    onStepUrlClick
}: {
    steps:
        | {
              title: string
              done: boolean
              url?: string | undefined
          }[]
        | undefined
    onStepUrlClick: ((url: string) => void) | undefined
}) => (
    <List>
        {(steps || []).map((step, index) => {
            const handleOnClickStepUrl = () => {
                if (onStepUrlClick && step.url) {
                    onStepUrlClick(step.url)
                }
            }

            return (
                <ListItemContainer key={index}>
                    <CheckCircleIcon
                        style={{
                            color: step.done ? feedback.success : gray[600]
                        }}
                    />
                    <Typography
                        variant='body1'
                        style={{
                            color: gray[700],
                            fontWeight: 600
                        }}>
                        {step.title}
                    </Typography>
                    {step.url && onStepUrlClick && (
                        <>
                            <IconButton
                                data-testid={`step-card-button-${index}`}
                                style={{
                                    backgroundColor: 'unset'
                                }}
                                onClick={handleOnClickStepUrl}>
                                <HelpIcon
                                    fontSize='small'
                                    style={{ margin: '0px' }}
                                />
                            </IconButton>
                        </>
                    )}
                </ListItemContainer>
            )
        })}
    </List>
)

export const StepCardDetails = (props: IStepCardDetailsProps) => {
    const { steps, onStepUrlClick, image, expansionPanelDetailsProps } = props

    return (
        <MuiAccordionDetails
            style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
            {...expansionPanelDetailsProps}>
            <StepCardColumn justifyContent='start'>
                <StepsList steps={steps} onStepUrlClick={onStepUrlClick} />
            </StepCardColumn>
            {image && (
                <StepCardColumn justifyContent='end'>
                    {typeof image === 'string' ? (
                        <img src={image} alt='Step Icon' />
                    ) : (
                        image
                    )}
                </StepCardColumn>
            )}
        </MuiAccordionDetails>
    )
}
