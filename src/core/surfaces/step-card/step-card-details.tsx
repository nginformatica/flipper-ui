import React from 'react'
import { List } from '@material-ui/core'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import type { IStepCardProps } from '.'
import IconButton from '@/core/inputs/icon-button'
import {
    ACORDION_DETAILS,
    ICON_BUTTON,
    IconCheck,
    IconHelp,
    ListItemContainer,
    StepCardColumn,
    TypographyContainer
} from './styles'

interface IStepCardDetailsProps {
    steps: IStepCardProps['steps']
    onStepUrlClick?: IStepCardProps['onStepUrlClick']
    image?: IStepCardProps['image']
    expansionPanelDetailsProps?: IStepCardProps['expansionPanelDetailsProps']
}

export const StepCardDetails = (props: IStepCardDetailsProps) => {
    const { steps, onStepUrlClick, image, expansionPanelDetailsProps } = props

    const stepsList = () => (
        <List>
            {(steps || []).map((step, index) => {
                const handleOnClickStepUrl = () => {
                    if (onStepUrlClick && step.url) {
                        onStepUrlClick(step.url)
                    }
                }

                return (
                    <ListItemContainer key={index}>
                        <IconCheck done={step.done} />
                        <TypographyContainer variant='body1'>
                            {step.title}
                        </TypographyContainer>
                        {step.url && onStepUrlClick && (
                            <>
                                <IconButton
                                    data-testid={`step-card-button-${index}`}
                                    style={ICON_BUTTON}
                                    onClick={handleOnClickStepUrl}>
                                    <IconHelp fontSize='small' />
                                </IconButton>
                            </>
                        )}
                    </ListItemContainer>
                )
            })}
        </List>
    )

    return (
        <MuiAccordionDetails
            style={ACORDION_DETAILS}
            {...expansionPanelDetailsProps}>
            <StepCardColumn justifyContent='start'>
                {stepsList()}
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
